const Candy = require('../models/candy');

exports.getCandies = async(req, res, next) => {
    try {
        const candies = await Candy.findAll();
        res.status(200).json({allCandies: candies});;

    } catch(error) {
        console.log('Get candies is failing '+ JSON.stringify(error));
        res.status(500).json({ error: error});
    }
};

exports.postCandy = async (req, res, next) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const price = req.body.price;
        const quantity = req.body.quantity;

        const data = await Candy.create( {name: name, desc: desc, price: price, quantity: quantity});
        res.status(201).json({newCandyDetail: data});
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
};

exports.updateCandy = async(req, res, next) => {
    try {
        console.log('inside delete');
        if(req.params.id == 'undefined') {
            console.log('Id is missing');
            return res.status(404).json({err: 'Id is missing'});
        }
        const candyId = req.params.id;
        await Candy.destroy({where: {id: candyId}});
        res.sendStatus(200);
    } catch(error) {
        console.log('Delete candy is failing '+ JSON.stringify(error));
        res.status(500).json({ error: error});
    }
};