
const { Pool } = require('pg');
const { menorCaminho } = require("../../utils/functions")

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

const getAll = async (req, res) => {
    try {
        const query = `SELECT * FROM clientes;`

        const result = await db.query(query)

        res.json({ success: true, data: result.rows })
        
    } catch (error) {
        console.log(error)
        return res.json({ success: false, data: [] })   
    }
}

const create = async (req, res) => {
    try {

        console.log(req)
        const { telefone, nome, email, latitude, longitude} = req.body;

        const query = `
            INSERT INTO clientes (telefone, nome, email, latitude, longitude)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;`

        const result = await db.query(query, [
            telefone, nome, email, latitude, longitude
        ])

        return res.json({ success: true, data: result.rows[0] })
        
    } catch (error) {
        console.log(error)
    }
}

const findRoute = async (req, res) => {
    try {
        const query = `SELECT
            id,
            nome,
            latitude,
            longitude 
        FROM
        clientes;`;

        const {rows: clientes} = await db.query(query);
        const allPoints = [
            {'0': 0, '1': 0, 'nome': 'Facilita Jurídico'},
            ...clientes.map((client) => ({
            '0': client.latitude, 
            '1': client.longitude, 
            nome: client.nome,
            id: client.id,
        }))]
        const smallerPath = menorCaminho(allPoints).map((e, index) => ({...e, index}))
        return res.json({ success: true, data: smallerPath })

    } catch (error) {
        console.log(error)
    }
}

const deleteById = async (req, res) => {
    try {
        
        const {id} = req.params;

        const query = `DELETE
        FROM
        clientes WHERE id= $1 ;`;

        const {rows: clientes} = await db.query(query, [id]);
        const allPoints = [
            {'0': 0, '1': 0, 'nome': 'Facilita Jurídico'},
            ...clientes.map((client) => ({
            '0': client.latitude, 
            '1': client.longitude, 
            nome: client.nome,
            id: client.id,
        }))];

        const smallerPath = menorCaminho(allPoints).map((e, index) => ({...e, index}));

        return res.json({ success: true, data: smallerPath });

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    create,
    getAll,
    findRoute,
    deleteById
}