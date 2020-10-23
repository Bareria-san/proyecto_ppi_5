const {Router} = require("express")
const router = Router()
const fs = require("fs")
const FileFavoritos = fs.readFileSync('./productos.json', 'utf-8')
const JSONFavoritos = JSON.parse(FileFavoritos)

router.get("/favoritos", (req, res) => {
    res.json(JSONFavoritos)
  })

router.get("/favoritos/:id", (req,res) => {
    let id = req.params.id
    let ProductoEncontrado = JSONFavoritos.find(producto => producto.id == id)
  
    if(ProductoEncontrado != undefined)
      res.status(204).json(ProductoEncontrado)
    else
      res.json(`No ha marcado el producto con el ID ${id} como favorito.`)
  })

module.exports = router