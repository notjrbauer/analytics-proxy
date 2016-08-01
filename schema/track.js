module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Track',
  allOf: [{
    $ref: '#common'
  }, {
    properties: {
      properties: {
        type: 'object',
        required: false
      },
      event: {
        type: 'string',
        required: true
      }
    }
  }],
  required: ['event'],
  additionalProperties: true
}
