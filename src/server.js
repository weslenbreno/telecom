import { createServer, Model, Factory, RestSerializer, Response } from 'miragejs';
import generateNumber  from 'utils/scripts/generateDIDNumbers';
import { removeDIDFormat } from 'utils/scripts/helpers';

const queryByValue = (arr = [], query = '') => {
  return arr.filter(item => removeDIDFormat(item.value.toLowerCase()).includes(query.toLowerCase().replace(' ', '')))
}

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    seeds(server) {
      server.createList("number", 800)
    },

    factories: {
      number: Factory.extend({
        afterCreate(number, server) {
          const query = server.schema.db.numbers.where({value: number.value});
          if (query.length > 1) {
            number.destroy() 
          }
        },
        value() {
          return generateNumber()
        },
        monthyPrice () {
          return (Math.random() * 10).toFixed(2);
        },
        setupPrice () {
          return (Math.random() * 10).toFixed(2);
        },
        currency () {
          const currencies = ['U$', 'R$', '€'];
          const index = Math.floor(Math.random() * currencies.length)
          return currencies[index];
        }
      }),
    },

    models: {
      number: Model,
    },

    serializers: {
      numbers: RestSerializer.extend({
        include(request, resource) {
          return Object.keys(this.schema.associationsFor(resource.modelName));
        }
      })
    },

    routes() {
      this.namespace = 'api';
      this.get('numbers', (schema, request) => {
        let {queryParams: { pageOffset = 1, pageSize, query = '' }} = request        
        const numbers = queryByValue(schema.db.numbers, query);
    
        if (parseInt(pageSize)) {
            
            const start = parseInt(pageSize) * (parseInt(pageOffset) <= 1 ? 0: pageOffset -1)
            const end = start + parseInt(pageSize)
            const page = numbers.slice(start, end)

            return {
                data: page,
                total: numbers.length,
                next: numbers.length > end ? parseInt(pageOffset) + 1 : null,
                prev: parseInt(pageOffset) - 1 === 0 ? null : parseInt(pageOffset) - 1
            }
        }

        return numbers
      }, {timing: 2000});
      
      this.get("/numbers/:id");
      this.post("/numbers", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        const query = schema.db.numbers.where({value: attrs.value});
      
        if (query.length > 0) {
          return new Response(409, {}, { statusCode:  409, error: 'Resource alredy exists'});
        }
        
        const newNumber = schema.create('number', attrs)
        attrs.id = newNumber.id;        
        return new Response(200, {}, { statusCode: 200,  number:  attrs})
      })

      this.patch("/numbers/:id", (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody)

        const query = schema.db.numbers.where({value: attrs.value})
                                       .filter(number => number.id !== id);
        if (query.length > 0) {
          return new Response(409, {}, { statusCode:  409, error: 'Resource with this number alredy exists'});
        }
        schema.numbers.find(id).update(attrs)
        
        return new Response(200, {}, { statusCode: 200,  number:  attrs, updated: false})
      })

      this.del("/numbers/:id", (schema, request) => {
        let id = request.params.id;
        const number = schema.numbers.find(id);
        number.destroy();
        return new Response(200, {}, { statusCode: 200,  number:  number, updated: true})
      })

    },
  });
}