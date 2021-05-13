import Cars_description from '../../models/Cars_description.cjs';

async function store(req, res) {
    const { id_cars } = req.params;

    const {
        description,
        title,
        url_img_description } = req.body;

        const cars_description = await Cars_description.create({
            description,
            title,
            url_img_description,
            id_cars: Number(id_cars)
        })

        return res.status(201).json({
            cars_description
        })

}

async function index(req, res) {

    try {
        const cars_description = await Cars_description.findAll();
        return res.status(201).json({
            cars_description
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }

}

export { store, index }