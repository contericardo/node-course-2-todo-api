
// Creates or use the database...
const {MongoClient, ObjectID} = require('mongodb')
var obj = new ObjectID();

console.log('Mensagem');
console.log (obj);


const url = 'mongodb://localhost:27017/TodoApp';
// Connectando
MongoClient.connect(url, (err, client) => {
  if (err){
    return console.log('---- Erro: Unable to connect to MongoDB server');
  }

console.log('---- Sucesso: Connected to MongoDB server');
const db = client.db('TodoApp');

//

//MongoClient mongoClient = new MongoClient(new ServerAddress("localhost", 27017));
//DB db = mongoClient.getDB("mydb");
//DBCollection collection = db.getCollection("test");

// colecao = db.collection('Todos').insertOne(
//   { text:'Minha Tarefa',
//     completed: false },
//     (err,result) =>{
//       if (err){
//         return console.log("Erro" + err);
//       }
//         console.log(JSON.stringify(result.ops,undefined,2));
//     }
// );


//   client.close();
// });

colecao = db.collection('Users').insertOne(
  { name:'Carioca',
    age: 67,
    location:'Rio' },
    (err,result) =>{
      if (err){
        return console.log("Erro" + err);
      }
        console.log(JSON.stringify(result.ops,undefined,2));
    }
);


  client.close();
});