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
      }),
    },

    models: {
      number: Model,
    },

    routes() {
      this.namespace = 'api';
      this.get('numbers', (schema, request) => {
        const {queryParams: { pageOffset = 0, pageSize }} = request
        const numbers = schema.db.numbers;
        if (parseInt(pageSize)) {
            const start = parseInt(pageSize) * parseInt(pageOffset)
            const end = start + parseInt(pageSize)
            const page = numbers.slice(start, end)
            return {
                data: page,
                next: numbers.length > end ? parseInt(pageOffset) + 1 : null,
                prev: parseInt(pageOffset) - 1 === 0 ? parseInt(pageOffset) - 1 : null
            }
        }
        return numbers
      });
    },
  });
}
