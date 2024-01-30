// require("dotenv").config();
// const { Pool } = require("pg");

// const database = process.env.PGDATABASE;

// const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;

// const pool = new Pool({
//     connectionString: connectionString,
// });

// module.exports = {
//     query: (text, params) => pool.query(text, params),
//     end: () => pool.end(),
// };

require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

module.exports = { pool };
