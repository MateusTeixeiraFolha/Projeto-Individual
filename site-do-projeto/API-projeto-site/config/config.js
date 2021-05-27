module.exports = {
  // Insira aqui seus dados do banco NA NUVEM AZURE
  production: {
    // altere APENAS username, password, database e host.
    username: 'bandtec',
    password: '#Gfgrupo3',
    database: '211-1a-grupo3',
    host: '2111agrupo3.database.windowns.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  },

  // Insira aqui seus dados do banco LOCAL - MySQL Workbench
  dev: {
    // altere APENAS username, password e database.
   
    username: 'Mousseria_Teixeira',
    password: 'Tournerdanslavide.01.',
    database: 'Mousseria_Teixeira',
    host: '127.0.0.1',
    dialect: 'mysql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  },
};