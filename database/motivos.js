async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    //testando a conexão
    const client = await pool.connect();
    console.log("Pool de conexões criado");

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function insertMotivos(motivo){
    const client = await connect();
    const sql = 'INSERT INTO motivos(descricao) VALUES ($1);';
    const values = [motivo];
    const res = await client.query(sql, values);
    client.release();

    return res;
}

async function selectMotivos() {
    const client = await connect();
    const res = await client.query('SELECT id, descricao FROM motivos');
    client.release();

    return res.rows;
}

async function updateMotivo(id, motivo){
    const client = await connect();
    const sql = 'UPDATE motivos SET descricao=$2 WHERE id=$1';
    const values = [id, motivo];
    res = await client.query(sql, values);
    client.release();

    return res;
}

async function deleteMotivo(id){
    const client = await connect();
    const sql = 'DELETE FROM motivos where id=$1;';
    const values = [id];
    const res = await client.query(sql, values);
    client.release();

    return res;
}

module.exports = {insertMotivos, selectMotivos, updateMotivo, deleteMotivo};