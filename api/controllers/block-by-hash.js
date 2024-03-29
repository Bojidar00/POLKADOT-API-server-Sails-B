const apiConnection = require('../../nodeConnection');
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});
module.exports = {


  friendlyName: 'Block by hash',


  description: '',


  inputs: {
    hash: {
      description: 'hash',
    
      type: 'string',
     
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
     try{
    return connectApi.then(api => api.rpc.chain.getBlock(inputs.hash));
  } catch (error) {
    return"Some error occurred!";
}

  }


};
