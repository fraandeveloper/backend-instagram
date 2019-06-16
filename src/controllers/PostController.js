//Regras de negocios

const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const [ name ] = image.split('.');
        const filename = `${name}.jpg`;

        //Reduzindo o tamanho da imge
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile( 
                path.resolve(req.file.destination, 'resized', filename)
            )
        
            //Deletando a image original
            fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: filename
        });
        return res.json(post);
    }
}