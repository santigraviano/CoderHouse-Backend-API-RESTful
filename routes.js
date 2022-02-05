const { Router } = require('express')
const Productos = require('./Productos.js')
const router = Router()

const productos = new Productos()

router.get('/', (req, res) => {
  res.json(productos.all())
})

router.post('/', (req, res) => {
  if (!('title' in req.body) || !('price' in req.body) || !('thumbnail' in req.body)) {
    res.status(400).json({ error: 'No se recibieron los campos requeridos' })
    return
  }
  const { title, price, thumbnail } = req.body
  res.json(productos.add(title, price, thumbnail))
})

router.get('/:id', (req, res) => {
  try {
    res.json(productos.find(req.params.id))
  }
  catch (err) {
    res.json({ error: err.message })
  }
})

router.put('/:id', (req, res) => {
  const { title, price, thumbnail } = req.body
  try {
    productos.edit(req.params.id, title, price, thumbnail)
    res.sendStatus(200)
  }
  catch (err) {
    res.json({ error: err.message })
  }
})

router.delete('/:id', (req, res) => {
  try {
    productos.delete(req.params.id)
    res.sendStatus(200)
  }
  catch (err) {
    res.json({ error: err.message })
  }
})

module.exports = router