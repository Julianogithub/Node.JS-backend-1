const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: db,
		// .env referencia
		/*
		module.exports = {
			authSecret: 'abc',
			db: {
				host : '127.0.0.1',
				port: 5432,
				database: '< nome do banco >',
				user: '< nome do usuario >',
				password: '< senha >'
			}
		}
		*/
	    // Configuração do usuario e senha do banco knowledge_final  
		// knowledge_final=# CREATE USER juliano WITH PASSWORD '123456';
		// knowledge_final=# GRANT ALL PRIVILEGES ON DATABASE "knowledge_final" TO juliano,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};


