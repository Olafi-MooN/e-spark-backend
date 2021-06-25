import Cars from '../../models/Cars.cjs';

async function store(req, res) {
    const { name_car, quantity_in_stock, url_img_car } = req.body;
        // #swagger.tags = ['CarsController']
        // #swagger.description = 'Armazena os carros no banco de dados'
    try {
        const cars = await Cars.create({
            name_car,
            quantity_in_stock,
            url_img_car
        })
    
        return res.status(201).json({
            cars
        })

    } catch (error) {
        return res.status(400).json({
            error,
            cars
        })
    }
}

async function index(req, res) {
    try {
        const cars = await Cars.findAll({
            include: [
                { association: 'Cars_description' },
                { association: 'Cars_datasheet' }
            ]  
        });
        return res.status(201).json({
            cars
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }   
}

async function destroy(req, res){
    const { id } = req.params;

    const cars = await Cars.destroy({
        where: {
            id
        }
    });

    return res.status(202).json({
        cars
    })
}

export { store, index, destroy }