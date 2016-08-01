module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Page',
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
