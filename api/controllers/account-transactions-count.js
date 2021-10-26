const dbConnection = require('../../dbConnection');
const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL from Server"));
  return db;
}); 

module.exports = {


  friendlyName: 'Account transactions count',


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

            
    const result = await connectDb.query(`SELECT COUNT(*) AS count FROM transactions WHERE sender='${address}' OR recipient='${address}'`);
    return result?.rows;

  }


};