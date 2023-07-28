require("dotenv").config();


const getHandler = async (req, res) => {
    const db = require("../database/motivos");
    const motivos = await db.selectMotivos();
    res.send(motivos);
};

const postHandler = async (req, res) => {
    const db = require("../database/motivos");
    const descicao = req.body.descricao;
    if(descricao){
        req.body.descricao;
        return res.send(`Descricao ${req.body.descricao} adicionada com sucesso`);
    }

    return res.status(400).send('Parâmetro "descricao" não encontrado no corpo da requisição.');
};

module.exports = {getHandler, postHandler};