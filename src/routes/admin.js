const express = require('express')
const router = express.Router()

const {getUsers, getProviders,ban, hacerAdmin, unBann, getCompras, deleteComent, compraDetail, deletePregunta, getAyudas, deleteUser, deleteProvider, createService, deleteAyuda} = require('../controllers/admin')

router.get('/usuarios', getUsers)
router.get('/proveedores', getProviders)
router.get('/compras', getCompras)
router.get('/compras/:id', compraDetail)
router.get('/ayudas', getAyudas)
router.put('/ban', ban)
router.put('/unban', unBann)
router.post('/setAdmin', hacerAdmin)
router.post('/newService', createService)
router.delete('/comentarios/:idComentario', deleteComent)
router.delete('/ayuda/:ayudaId', deleteAyuda )
router.delete('/pregunta/:idPregunta', deletePregunta)
router.delete('/deleteUser/:idUsuario', deleteUser)
router.delete('/deleteProvider/:idProveedor', deleteProvider)
module.exports = router