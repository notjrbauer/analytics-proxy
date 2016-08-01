module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Common',
  description: 'Common schema attributes',
  type: 'object',
  properties: {
    anonymousId: {
      type: 'string',
      required: false
    },
    context: {
      type: 'object',
      required: false,
      // need ref
    },
    integrations: {
      type: 'object',
      required: false
    },
    messageId: { // implicit
      type: 'string',
      required: false
    },
    receivedAt: { //implicit
      type: 'string',
      format: 'date-time',
      required: false
    },
    sentAt: {
      type: 'string',
      format: 'date-time',
      required: false
    },
    timestamp: {
      type: 'string',
      format: 'date-time',
      required: false
    },
    type: { // implicit
      type: 'string',
      enum: ['identify', 'group', 'track', 'page', 'screen', 'alias'],
      required: true
    },
    version: { // implicit
      type: 'string',
      required: false
    }
  },
  additionalProperties: true
}
