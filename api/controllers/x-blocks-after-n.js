const apiConnection = require('../../nodeConnection');
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});
module.exports = {


  friendlyName: 'X blocks after n',


  description: '',


  inputs: {
    x: {
      description: 'x',
    
      type: 'number',
     
      required: true
    },
    n: {
      description: 'n',
    
      type: 'number',
     
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    try{
    const x = inputs.x;
    const n = inputs.n;
        
            return connectApi.then( async api => {
                let i = 1;
                let blocks = [];
                
                while (i <= x)  {
                    let tempBlock = await api.rpc.chain.getBlockHash(n-i);
                    blocks.push(tempBlock);
                    i++;
                }
        
                return blocks;
            })
          } catch (error) {
            return"Some error occurred!";
        }

  }


};
