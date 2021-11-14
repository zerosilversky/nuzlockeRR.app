import { pick } from 'ramda'
import Pokemon from './index.js'

export async function get ({ params }) {
  const items = Object
    .values(Pokemon)
    .map(pick(['name', 'sprite', 'alias']))

  return {
    body: items,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'Content-Type': 'application/json'
    }
  }
}
