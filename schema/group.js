module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Group',
  allOf: [
    { $ref: '#common'},
    { properties: {
        groupId: { type: 'string', required: true },
        traits: { $ref: '#traits', required: false }
    }}
  ],
  additionalProperties: true
}


