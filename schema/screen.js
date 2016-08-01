module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Screen',
  allOf: [
    { $ref: '#common'},
    { properties: {
        name: { type: 'string', required: false },
        properties: {
          type: 'object',
          required: false
        }
    }}
  ],
  additionalProperties: true
}

