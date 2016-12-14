var express = require('express');
var router = express.Router();
var IndexCtrl = require('./controllers/index');
var pupiescall=require('./controllers/pupiesController');
router.get('/', IndexCtrl.index);
/**
 * @swagger
 * definition:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */
/**
 * @swagger
 * /api/puppies/all:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get('/api/pupies/all',pupiescall.getall);
router.get('/api/pupie/:id',pupiescall.getpup);
router.post('/api/add',pupiescall.add);
router.put('/api/pupie/:id',pupiescall.deletepup);
router.put('/api/pupies/:id',pupiescall.updatepup);
module.exports = router;