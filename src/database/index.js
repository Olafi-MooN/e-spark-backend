import Sequelize from 'sequelize';
import config from '../config/database.cjs';

import Cars_description from '../models/Cars_description.cjs';
import Cars_datasheet from '../models/Cars_datasheet.cjs';
import Cars from '../models/Cars.cjs';
import Users from '../models/Users.cjs';
 
// indica para o sequelize, qual o tipo de banco de dados será utilizado
const sequelize = new Sequelize(config.development);

// Cria uma funcão, que verifica a conexão com o banco de dados
async function connection_db () {
    try {
        const resultado = await sequelize.authenticate();;
        console.log("Conectado ao banco de dados!");
    } catch (error) {
        console.log('Ocorreu um erro ao se conectar com o banco de dados!');
    }
};
 
Cars.init(sequelize);
Cars_description.init(sequelize);
Cars_datasheet.init(sequelize)
Users.init(sequelize)

Cars_description.associate(sequelize.models);
Cars_datasheet.associate(sequelize.models);
Cars.associate(sequelize.models);

export { sequelize, connection_db };