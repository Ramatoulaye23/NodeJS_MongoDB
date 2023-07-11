const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/ControleurAnnonce.js');

router.get('user/annonce', auth, stuffCtrl.getAllStuff);
router.post('/annonce', auth, stuffCtrl.createThing);
router.get('/annonce/:id', auth, stuffCtrl.getOneThing);
router.put('/annonce/:id', auth, stuffCtrl.modifyThing);
router.delete('/annonce/:id', auth, stuffCtrl.deleteThing);

module.exports = router;