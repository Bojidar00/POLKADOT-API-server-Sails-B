const dbConnection = require('../../dbConnection');
const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL from Server"));
  return db;
}); 

module.exports = {


  friendlyName: 'X transactions after nth',


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
    
    const result = await connectDb.query(`SELECT * FROM transactions WHERE id < ${n} AND id > ${n} - ${x} LIMIT ${x}`);
    return result?.rows;
  } catch (error) {
    return"Some error occurred!";
}

  }


};
