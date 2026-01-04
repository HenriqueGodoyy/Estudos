import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

let usuarios = [
  { id: 1, name: 'Henrique', age: 18, email: 'henrique@email.com' }
]

app.get('/usuarios', (req, res) => {
  res.json(usuarios)
})

app.post('/usuarios', (req, res) => {
  const { name, age, email } = req.body

  const novoUsuario = {
    id: Date.now(),
    name,
    age,
    email
  }

app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params

  usuarios = usuarios.filter(user => user.id !== Number(id))

  res.status(204).send()
})

  usuarios.push(novoUsuario)

  res.status(201).json(novoUsuario)
})

app.listen(3000, () => {
  console.log('🚀 Backend rodando na porta 3000')
})
