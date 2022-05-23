const express = require('express');
const router = express.Router();
const { sequelize, Post } = require('../models');

// force: true => 테이블 초기화
sequelize.sync({force : false})
.then(() => {
    console.log('db 실행...');
})
.catch((err) => {
    console.log(err);
})

router.get('/', async (req, res) => {
    let post = await Post.create({
        comment: "welcome to sequelize world!!", // req.comment
    });
    res.send();
})

module.exports = router;