export default {
    info: {
        version: "1.0.0",
        title: "Api e-spark",
        description: "Essa api tem como objetivo facilitar as rotas criadas na aplicação.",
        contact: {
            email: "Alefmastertutor@gmail.com"
        }
    },
    "host": "e-spark-back.herokuapp.com",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        // petstore_auth: {
        //     type: "oauth2",
        //     authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
        //     flow: "implicit",
        //     scopes: {
        //         read_pets: "read your pets",
        //         write_pets: "modify pets in your account"
        //     }
        // }
    },
    definitions: {
        User: {
            first_name: "Alef",
            last_name: "Santos Soares",
            email: "Alefmastertutor@gmail.com",
            password: "password321",
        },
        UsersCars: {
            user_id: 1,
            car_id: 1
        },
        UsersCarsHistory: [

            {
                id: 1,
                id_users: 1,
                id_cars: 1,
                createdAt: "2021-06-04T21:03:18.082Z",
                updatedAt: "2021-06-04T21:03:18.082Z",

                Users_car: {
                    id: 1,
                    name_car: "BYD_e5",
                    quantity_in_stock: 2,
                    url_img_car: "https://storage.googleapis.com/e-spark-3b3b6.appspot.com/cars/BYD_e5.png?GoogleAccessId=firebase-adminsdk-kc4lz%40e-spark-3b3b6.iam.gserviceaccount.com&Expires=1652196711&Signature=P%2FpzpxiR8lR%2BE48YxaAtCXWqB1kmRnfWR%2BZ24Acty8KDfLMz2YsZ36NKE6ESWIQ%2F%2BPeCSVh8ZfOPZ1YuwZpcojRhW4Nb3QfevZUTazqkavQ6BFZm%2BnCNHKK8FJ3xP3IIzz58WPg7PkYL%2FCkXWa4uPRyLx5BdLBNe1nZe1Z0cTkBu5jpUBpxqLzFsUbSeSE5JuMqnHEWJYVhJZ8kNmQNekI4YroxhfpkixhFOUHqsklF9Vyds4PEGrC9DFP38P4ZZkvSomFg1EjQopEAZ22DIlGu2bpVwv1oqX1VTTYZXhFlQioeiqoRkJULqcLPcb1IQCoB%2BF5GkeTRMPmkkzRWd0Q%3D%3D",
                    createdAt: "2021-06-04T21:02:22.239Z",
                    updatedAt: "2021-06-04T21:02:22.239Z"
                }
            },

            {
                id: 2,
                id_users: 1,
                id_cars: 1,
                createdAt: "2021-06-04T21:04:43.939Z",
                updatedAt: "2021-06-04T21:04:43.939Z",

                Users_car: {
                    id: 1,
                    name_car: "BYD_e5",
                    quantity_in_stock: 2,
                    url_img_car: "https://storage.googleapis.com/e-spark-3b3b6.appspot.com/cars/BYD_e5.png?GoogleAccessId=firebase-adminsdk-kc4lz%40e-spark-3b3b6.iam.gserviceaccount.com&Expires=1652196711&Signature=P%2FpzpxiR8lR%2BE48YxaAtCXWqB1kmRnfWR%2BZ24Acty8KDfLMz2YsZ36NKE6ESWIQ%2F%2BPeCSVh8ZfOPZ1YuwZpcojRhW4Nb3QfevZUTazqkavQ6BFZm%2BnCNHKK8FJ3xP3IIzz58WPg7PkYL%2FCkXWa4uPRyLx5BdLBNe1nZe1Z0cTkBu5jpUBpxqLzFsUbSeSE5JuMqnHEWJYVhJZ8kNmQNekI4YroxhfpkixhFOUHqsklF9Vyds4PEGrC9DFP38P4ZZkvSomFg1EjQopEAZ22DIlGu2bpVwv1oqX1VTTYZXhFlQioeiqoRkJULqcLPcb1IQCoB%2BF5GkeTRMPmkkzRWd0Q%3D%3D",
                    createdAt: "2021-06-04T21:02:22.239Z",
                    updatedAt: "2021-06-04T21:02:22.239Z"
                }
            },
        ],
        CreateCars: {
            name_car: 'fusca',
            quantity_in_stock: 1,
            url_img_car: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGkzPK9UHC8IHSUlc_z_iD-_UKXvuyZWFHg&usqp=CAU'
        },
        CarsDescription: {
            description: "O melhor da categoria de fuscas, esse carro conta com a melhor tecnologia do mercado",
            title: "Fusca Renovavel",
            url_img_description: "https://www.autoentusiastas.com.br/ae/wp-content/uploads/2019/08/AG-205-Foto-00-1140x720.png",
            id_cars: "1"
        },
        CarsDatasheet: {
            brand: "Volkswagen",
            model: "Fusca",
            category: "Relic",
            autonomy: "",
            maximum_speed: 200,
            acceleration: "100km/s",
            power: "60w",
            transmission: "Automatic",
            occupants: 5,
            capacity: "200L",
        },
        Cars: [
            {
                id: 1,
                name_car: "BYD_e5",
                quantity_in_stock: 2,
                url_img_car: "https://storage.googleapis.com/e-spark-3b3b6.appspot.com/cars/BYD_e5.png?GoogleAccessId=firebase-adminsdk-kc4lz%40e-spark-3b3b6.iam.gserviceaccount.com&Expires=1652196711&Signature=P%2FpzpxiR8lR%2BE48YxaAtCXWqB1kmRnfWR%2BZ24Acty8KDfLMz2YsZ36NKE6ESWIQ%2F%2BPeCSVh8ZfOPZ1YuwZpcojRhW4Nb3QfevZUTazqkavQ6BFZm%2BnCNHKK8FJ3xP3IIzz58WPg7PkYL%2FCkXWa4uPRyLx5BdLBNe1nZe1Z0cTkBu5jpUBpxqLzFsUbSeSE5JuMqnHEWJYVhJZ8kNmQNekI4YroxhfpkixhFOUHqsklF9Vyds4PEGrC9DFP38P4ZZkvSomFg1EjQopEAZ22DIlGu2bpVwv1oqX1VTTYZXhFlQioeiqoRkJULqcLPcb1IQCoB%2BF5GkeTRMPmkkzRWd0Q%3D%3D",
                createdAt: "2021-06-04T21:02:22.239Z",
                updatedAt: "2021-06-04T21:02:22.239Z",

                Cars_description: {
                    id: 1,
                    description: "Certificado pelo NCAP com 5 estrelas, o novo e5-300 é 100% elétrico, extremamente silencioso e não emite poluentes. Com amplo espaço interno e porta malas Grande (450 litros), é equipado com KERS (Sistema de regeneração), e One Pedal drive que garantem maior autonomia e conforto.",
                    title: "BYD e5",
                    url_img_description: "https://storage.googleapis.com/e-spark-3b3b6.appspot.com/cars/byd_e5_b.png?GoogleAccessId=firebase-adminsdk-kc4lz%40e-spark-3b3b6.iam.gserviceaccount.com&Expires=1652196715&Signature=W4Zs%2B0K%2FuljjPS0JEKr9YHP4MQ5vzW0tSl4ganu1YHPrdgoYN0BbUyyDZHIC5Pl7UZe%2F5fG1rGqwHURetbwXbOSWkyx69FwqWQojc7flf271mEH4TqgZDl08S2xV7WXvDCs7WcFrkF4gJupi44wAwbqHR0KNpjfegRz9AHcsSw99VzTqQ7pFoZAiJovpyOGnIRnSsbJzcfgeDevGHDRWMHBEnjgn43jC2TEJ%2Fh4Z%2B%2FjOPzpBTV5hwqEcGtI4iPL88sgu7bJoTNNnZtU2MCynS5gqyU3%2B401EGebH58TN57VGAQT9rPKyy06w1Y1PH89l8RCp4ANqdKapMTLK6pugsg%3D%3D",
                    createdAt: "2021-06-04T21:02:22.483Z",
                    updatedAt: "2021-06-04T21:02:22.483Z",
                    id_cars: 1
                },

                Cars_datasheet: {
                    id: 1,
                    brand: "BYD",
                    model: "e5",
                    category: "Sedan",
                    autonomy: "300 km",
                    maximum_speed: "130 km/h",
                    acceleration: "0 - 100 em 7,6s",
                    power: "218 CV",
                    transmission: "Automatica de 1(uma) marchas",
                    occupants: 5,
                    capacity: "450 L",
                    createdAt: "2021-06-04T21:02:22.718Z",
                    updatedAt: "2021-06-04T21:02:22.718Z",
                    id_cars: 1
                }
            }
        ]
    }
}