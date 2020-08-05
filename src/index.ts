import fetch from 'node-fetch'
import { Context, APIGatewayEvent } from 'aws-lambda'

type ClassList = {
  count: number
  results: any[]
}
const DND_5E_API = 'https://www.dnd5eapi.co'

async function getClassData(url) {
  const resp = await fetch(DND_5E_API + url)
  return resp.json()
}

async function getClass() {
  const resp = await fetch(`${DND_5E_API}/api/classes/`)
  const list: ClassList = await resp.json()
  return list.results[Math.floor(Math.random() * list.count)]
}

export async function handler(event: APIGatewayEvent, context: Context) {
  const randomClass = await getClass()
  const data = await getClassData(randomClass.url)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  }
}
