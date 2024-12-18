import postgres from "postgres";

const connectionString = process.env.POSTGRES_URL || "";
const sql: postgres.Sql = postgres(connectionString);

export default sql;