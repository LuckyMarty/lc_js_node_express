const express = require('express')
const { CompteBancaireController } = require('../controller/CompteBancaireController')
const router = express.Router()

router.get('/', CompteBancaireController)

