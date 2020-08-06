import fetch from 'node-fetch'
import { Context, APIGatewayEvent } from 'aws-lambda'

type MonsterList = {
  status?: number
  count?: number
  results?: any[]
}
const DND_5E_API = 'https://www.dnd5eapi.co'

async function getMonsterData(url) {
  try {
    const resp = await fetch(DND_5E_API + '123123' + url)
    return resp.json()
  } catch {
    throw new Error('monster not found')
  }
}

async function getMonster() {
  const resp = await fetch(`${DND_5E_API}/api/monsters/`)
  const list: MonsterList = await resp.json()

  if (!list.count) {
    throw new Error('no monsters')
  }

  return list.results[Math.floor(Math.random() * list.count)]
}

export async function handler(event: APIGatewayEvent, context: Context) {
  try {
    const randomMonster = await getMonster()
    const data = await getMonsterData(randomMonster.url)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: err.message,
      }),
    }
  }
}
