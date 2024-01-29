import express from 'express';
const spell = express();
import {db} from '../Database/connection.js'

spell.get('', async (req,res)=>{

    const sql = `select * from tbl_spells`;

    const result = await db.query(sql);

    res.json(result)

})

spell.post('', async (req,res)=>{

    const { nombre, coste, descripcion, efecto } = req.body;
    const parametros = [nombre, coste, descripcion, efecto];
    const sql = `insert into tbl_spells
                (nombre, coste, descripcion, efecto )
                values
                ($1, $2, $3, $4) returning * `

    const result = await db.query(sql, parametros);
    res.json(result);
})

export { spell }