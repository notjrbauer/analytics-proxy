module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Identify',
  allOf: [
    { $ref: '#common'},
    { properties: {
        traits: { $ref: '#traits'}
    }}
  ],
  additionalProperties: true
}
