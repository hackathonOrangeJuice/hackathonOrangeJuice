const path = require("path");

module.exports = {
  development: {
    client: "pg", // Usando o cliente para PostgreSQL
    connection: {
      host: "containers-us-west-62.railway.app",
      user: "postgres", // 
      password: "UdrThz2pytp35l0ecfQq", 
      database: "railway" ,
      port : "6182"
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds")
    }
  }
};
