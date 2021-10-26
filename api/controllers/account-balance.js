const apiConnection = require('../../nodeConnection');
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});

module.exports = {


  friendlyName: 'Account balance',


  description: '',


  inputs: {
    address: {
      description: 'address',
    
      type: 'string',
     
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    const address = inputs.address;

            
            return connectApi.then(api => api.query.system.account(address));

  }


};
