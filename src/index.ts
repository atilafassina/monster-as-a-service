import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda'

type Response = {
  statusCode: number
  body: string
}

const handler: Handler = async function (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) {
  const resp: Response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'it works',
    }),
  }

  return resp
}

export { handler }
