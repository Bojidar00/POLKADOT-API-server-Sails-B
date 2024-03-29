const apiConnection = require('../../nodeConnection');
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});
module.exports = {


  friendlyName: 'Block hash by number',


  description: '',


  inputs: {
    num: {
      description: 'num',
    
      type: 'number',
     
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    try{
    return connectApi.then(api => api.rpc.chain.getBlockHash(inputs.num));
  } catch (error) {
    return"Some error occurred!";
}

  }


};
