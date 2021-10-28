
const dbConnection = require('../../dbConnection');
const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL from Server"));
  return db;
}); 
module.exports = {


  friendlyName: 'Transactions count',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
     try{
    result = await connectDb.query(`SELECT COUNT(*) AS count FROM transactions`);
            return  result?.rows;
          } catch (error) {
            return"Some error occurred!";
        }

  }


};
