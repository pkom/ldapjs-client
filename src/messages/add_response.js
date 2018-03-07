const LDAPResult = require('./result');
const { LDAP_REP_ADD } = require('../utils/protocol');

module.exports = class AddResponse extends LDAPResult {
  constructor(options) {
    super(Object.assign({}, options, {protocolOp: LDAP_REP_ADD}));
  }
};
