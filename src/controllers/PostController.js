//Regras de negocios

const Post = require('../models/Post');

module.exports = {
    async indexedDB(req, res) {

    },

    async store(req, res) {
        console.log(req.file);
        return res.json({ ok: true });
    }
}