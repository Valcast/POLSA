const { MongoClient, ServerApiVersion } = require('mongodb')
const uri =
  'mongodb+srv://Valcast:MlsP8Wrl66ge@polsa.ompgi6m.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

exports.handler = async () => {
  try {
    await client.connect()

    const events = await client
      .db('POLSA')
      .collection('events')
      .find({})
      .toArray()

    const latestEvents = events
      .filter(event => event.date < new Date())
      .sort((firstEvent, secondEvent) => secondEvent.date - firstEvent.date)
      .slice(0, 3)

    const upcomingEvents = events
      .filter(event => event.date > new Date())
      .sort((firstEvent, secondEvent) => firstEvent.date - secondEvent.date)
      .slice(0, 3)

    return {
      statusCode: 200,
      body: JSON.stringify({ latestEvents, upcomingEvents }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  } finally {
    await client.close()
  }
}
