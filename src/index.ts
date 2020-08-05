import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda'

type Response = {
  statusCode: number
  body: string
}

const handler: Handler = function (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) {
  const resp: Response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'it works',
      event,
      context,
    }),
  }

  callback(undefined, resp)
}

export { handler }
