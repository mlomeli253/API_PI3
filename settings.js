"use strict";
//INFORMACIÓN NECESARIA PARA LA CONEXIÓN A LA BASE DE DATOS SQL SERVER
exports.dbConfig = {
	user: 'misael_lomeli',
	password: 'Programacion.253',
	server: 'lrmisael.database.windows.net',
  options: {
    encrypt: true,
  	database: 'pi_2016',
  }
};

//PUERTO PREDETERMINADO PARA EL SERVIDOR
exports.port = process.env.PORT || 3000;
exports.host = process.env.HOST || '0.0.0.0';
