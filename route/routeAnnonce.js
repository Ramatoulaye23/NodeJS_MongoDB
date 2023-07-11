const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.js');

const stuffCtrl = require('../controller/ControleurAnnonces.js');

// router.get('/', auth.Auth, stuffCtrl.getAllStuff);
// router.post('/', auth.Auth, stuffCtrl.createThing);
// router.get('/:id', auth.Auth, stuffCtrl.getOneThing);
// router.put('/:id', auth.Auth, stuffCtrl.modifyThing);
// router.delete('/:id', auth.Auth, stuffCtrl.deleteThing);

module.exports = router;