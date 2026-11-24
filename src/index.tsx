import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello 343')
// })


const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Acc 343!</h1>
      </body>
    </html>
  )
}

app.get('/page', (c) => {
  return c.html(<View />)
})



export default app
