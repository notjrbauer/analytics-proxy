module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Traits',
  type: 'object',
  properties: {
    address: {
      type: 'object',
      properties: {
        city: { type: 'string', required: false},
        country: { type: 'string', required: false},
        postalCode: { type: 'string', required: false},
        state: { type: 'string', required: false},
        street: { type: 'string', required: false}
      },
      required: false
    },
    age: {
      type: 'number',
      required: false
    },
    avatar: {
      type: 'string',
      required: false
    },
    birthday: {
      type: 'string',
      format: 'date-time',
      required: false
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      required: false
    },
    description: {
      type: 'string',
      required: false
    },
    email: {
      type: 'string',
      format: 'email',
      required: false
    },
    firstName: {
      type: 'string',
      required: false
    },
    lastName: {
      type: 'string',
      required: false
    },
    name: {
      type: 'string',
      required: false
    },
    phone: {
      type: 'string',
      required: false
    },
    title: {
      type: 'string',
      required: false
    },
    username: {
      type: 'string',
      required: false
    },
    website: {
      type: 'string',
      required: false
    }
  },
  additionalProperties: true,
  required: false
}
