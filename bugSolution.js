```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Correct usage of updateOne.  Specify a filter to target the correct document.
    const filter = {_id: new ObjectId('6510060a00f431371f072585')}; //Example filter
    const update = {$set: {field1: 'value1'}};
    const result = await collection.updateOne(filter, update);
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```