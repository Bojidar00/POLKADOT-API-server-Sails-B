const apiConnection = require('../../nodeConnection');
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});
module.exports = {


  friendlyName: 'Last block',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return await connectApi.then(api => api.rpc.chain.getBlock());

  }


};
