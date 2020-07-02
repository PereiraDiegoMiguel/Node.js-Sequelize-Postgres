const { Op } = require('sequelize');
const User = require('../models/User');


module.exports = {
    async show(request, response) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%g%'
                }
            },
            include: [
                {
                    association: 'addresses',
                    where: {
                        street: 'Rua 3500'
                    }
                },
                {
                    association: 'techs',
                    require: false,
                    where: {
                        name: {
                            [Op.iLike]: 'Java%'
                        }
                    }
                },
            ]
        })
        return response.json(users);
    }
}