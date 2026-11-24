import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello 343')
})

export default app
