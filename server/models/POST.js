const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize)
    {
        return super.init({
            comment: {
                type: Sequelize.STRING(100),
                allowNull: true,
            }
        }, {
            sequelize,
            // 시간을 기록할것인지
            timestamps: true,
            modelName: 'Post',
            tableName: 'posts',
            charset: 'utf8',
        })
    }
}