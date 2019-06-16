const PostController = require('./controllers/PostController');
const uploadconfig = require('./config/uploader');
const express = require('express');
const multer = require('multer');

const routes = new express.Router();
const upload = multer(uploadconfig);

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

module.exports = routes;