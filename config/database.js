module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      // database: env('DATABASE_NAME', 'licenta'),
      database: env("DATABASE_NAME", "papito"),
      user: env("DATABASE_USERNAME", "root"),
      // password: env('DATABASE_PASSWORD', '12345678'),
      password: env("DATABASE_PASSWORD", "123456"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
