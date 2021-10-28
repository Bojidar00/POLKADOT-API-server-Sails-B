

const dbConnection = require('../../dbConnection');
const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL from Server"));
  return db;
}); 
module.exports = {


  friendlyName: 'Transactions from block',


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
    const hash = inputs.hash;

            
            const result = await connectDb.query(`SELECT * FROM transactions WHERE block_hash='${hash}'`);
            return result?.rows;
          } catch (error) {
            return"Some error occurred!";
        }

  }


};
