module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Alias',
  allOf: [
    { $ref: '#common'},
    { properties: {
        previousId: { type: 'string', required: true },
        userId: { type: 'string', required: true }
    }}
  ],
  additionalProperties: true
}

