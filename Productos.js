class Productos {
  static id = 0

  constructor(items = []) {
    this.items = items
  }

  all() {
    return this.items
  }

  add(title, price, thumbnail) {
    Productos.id += 1
    this.items.push({
      id: Productos.id,
      title,
      price,
      thumbnail
    })
  }

  find(id) {
    const item = this.items.find(item => item.id == id)

    if (item) return item
    else throw Error('Producto no encontrado')
  }

  edit(id, title=null, price=null, thumbnail=null) {
    console.log(title, price, thumbnail)
    try {
      const item = this.find(id)
      item.title = title != null ? title : item.title
      item.price = price != null ? price : item.price
      item.thumbnail = thumbnail != null ? thumbnail : item.thumbnail
    }
    catch (err) {
      throw Error(err.message)
    }
  }

  delete(id) {
    try {
      const item = this.find(id)
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
    }
    catch (err) {
      throw Error(err.message)
    }
  }
}

module.exports = Productos