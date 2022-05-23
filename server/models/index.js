// 쿼리문을 작성하지 않고 객체를 통해
// 데이터베이스를 간접적으로 데이터를 조작할 수 있게
const Sequelize = require("sequelize");
// config.json 객체의 키값 가지고 오기
const env = process.env.NODE_ENV || "development";
// config.json 객체의 키값에 맞는 객체 바인딩
const config = require('../config/config.json')[env];
const Post = require('./POST');

const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Post = Post;

Post.init(sequelize);

module.exports = db;