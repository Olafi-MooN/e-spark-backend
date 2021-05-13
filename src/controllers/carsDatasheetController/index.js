import Cars_datasheet from '../../models/Cars_datasheet.cjs';

async function store(req, res) {
    const { id_cars } = req.params;
    const {
        brand,
        model,
        category,
        autonomy,
        maximum_speed,
        acceleration,
        power,
        transmission,
        occupants,
        capacity,
    } = req.body;

    const cars_datasheet = await Cars_datasheet.create({
        brand,
        model,
        category,
        autonomy,
        maximum_speed,
        acceleration,
        power,
        transmission,
        occupants,
        capacity,
        id_cars
    })

    return res.status(201).json({
        cars_datasheet
    })
}

export { store };