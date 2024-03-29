const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.mongoURI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

const currentDate = new Date()

exports.handler = async () => {
  try {
    await client.connect()

    const events = await client
      .db('POLSA')
      .collection('events')
      .find({})
      .toArray()

    const latestEvents = events
      .filter(event => event.date < currentDate)
      .sort((firstEvent, secondEvent) => secondEvent.date - firstEvent.date)
      .slice(0, 3)

    const upcomingEvents = events
      .filter(event => event.date > currentDate)
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
