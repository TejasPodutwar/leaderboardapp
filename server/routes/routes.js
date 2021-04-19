const express = require("express");
const router = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller');
const User = require("../model/user");

//Application functions
router.get('/', services.homeRoute); 
router.get('/add_user', services.addUserRoute);
router.get('/update_user', services.updateUserRoute);

//API functions
router.post('/api/users', controller.create_user);
router.get('/api/users', controller.find_user);
router.put('/api/users/:id', controller.update_user);
router.delete('/api/users/:id', controller.delete_user);

module.exports = router;