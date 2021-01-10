import { createServer, Model, Factory } from 'miragejs';
import generateNumber  from 'utils/scripts/generateDIDNumbers';

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

    routes() {
      this.namespace = 'api';
      this.get('numbers', (schema, request) => {
        let {queryParams: { pageOffset = 1, pageSize }} = request
        
        const numbers = schema.db.numbers;

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
      });
      
      this.resource("numbers", { except: ["index"] })
    },
  });
}
