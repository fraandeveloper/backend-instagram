const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const uploadconfig = require('./config/uploader');
const express = require('express');
const multer = require('multer');

const routes = new express.Router();
const upload = multer(uploadconfig);


//Rota para cadastro e listagem de Posts
routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

//Rota para likes
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;