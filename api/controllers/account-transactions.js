const dbConnection = require('../../dbConnection');
const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL from Server"));
  return db;
}); 

module.exports = {


  friendlyName: 'Account transactions',


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
    try{
    const address = inputs.address;

            
            const result = await connectDb.query(`SELECT * FROM transactions WHERE recipient='${address}' OR sender='${address}'`);
            return result?.rows;
          } catch (error) {
            return"Some error occurred!";
        }

  }


};
