module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Event',
  type: 'object',
  name: {
    type: 'string',
    required: false
  },
  revenue: {
    type: 'number',
    required: false
  },
  currency: {
    type: 'string',
    required: false
  },
  value: {
    type: 'number',
    required: false
  }
  required: false,
  additionalProperties: true
}
