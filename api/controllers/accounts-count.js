const dbConnection = require('../../dbConnection');
const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL from Server"));
  return db;
}); 
module.exports = {


  friendlyName: 'Accounts count',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const result = await connectDb.query(`SELECT COUNT(DISTINCT recipient)+COUNT(DISTINCT sender) AS count FROM transactions`);
    return result?.rows;
  }


};
