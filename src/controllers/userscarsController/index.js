import Cars from "../../models/Cars.cjs";
import Users from "../../models/Users.cjs";
import Users_cars from "../../models/Users_cars.cjs";

async function store(req, res) {
    const { user_id, car_id } = req.body;

    try {
        const user = await Users.findByPk(user_id);
        const car = await Cars.findByPk(car_id);

        if (!user || !car) {
            return res.status(404).json({
                status: false,
                response: "Ocorreu um erro: usuário ou carro invalído."
            })
        }

        const userscars = await Users_cars.create({
            id_users: user.id,
            id_cars: car.id
        })

        return res.status(201).json({
            status: true,
            data: userscars
        })

    } catch (error) {
        return console.log(error);
    }
}

async function index(req, res) {
    const { id_user } = req.params;

    try {
        const usercars = await Users_cars.findAll({
            where: {
                id_users: id_user
            },
            include: [
                { association: 'Users_car' },
            ] 
        })

        return res.status(200).json({
            usercars
        });

    } catch (error) {
        console.log(error);
    }


}

export { store, index };