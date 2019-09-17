module.exports = {

  friendlyName: 'Ping',

  description: 'Ping something.',

  inputs: {},

  exits: {},

  fn: async (_) => new Date().toString() + ' @' + sails.config.environment

};
