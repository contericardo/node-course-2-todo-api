
// Creates or use the database...
const {MongoClient, ObjectID} = require('mongodb')
const url = 'mongodb://localhost:27017/TodoApp';

// Connectando
MongoClient.connect(url, (err, client) => {
  if (err){
    return console.log('---- Erro: Unable to connect to MongoDB server');
  }

console.log('---- Sucesso: Connected to MongoDB server');
const db = client.db('TodoApp');

// db.collection('Todos').find({_id: new ObjectID( '5b608a250e6cbd436c6498f8')}).toArray().then(
//   (docs)=>{
//     console.log('ok');
//     console.log(JSON.stringify(docs,undefined,2));
//   },
//   (err)=>{
//     console.log(err);
//   } 
// )

db.collection('Users').find({name:'Conte'}).toArray().then(
  (docs)=>{ 
    console.log('ok'); 
    console.log(JSON.stringify(docs, undefined,2));
},
  (err)=>{  console.log(err);  } 
)

  client.close();
});