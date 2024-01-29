import {db} from '../Database/connection.js'

const getSpell = async (req,res)=>{

    const sql = `select * from tbl_spells order by id`;

    const result = await db.query(sql);

    res.json(result)

}

const putSpell = async (req,res)=>{

    const { nombre, coste, descripcion, efecto } = req.body;
    const params = [nombre, coste, descripcion, efecto];
    const sql = `insert into tbl_spells
                (nombre, coste, descripcion, efecto )
                values
                ($1, $2, $3, $4) returning * ` //returning * es para saber lo que modificamos

    const result = await db.query(sql, params);
    res.json(result);
}

const postSpell = async (req,res)=>{

    const {nombre, coste, descripcion, efecto} = req.body;
    const {id} = req.params;
    const params = [
        nombre,
        coste,
        descripcion,
        efecto,
        id
    ]

    const sql = `update tbl_spells
    set
                    nombre = $1
                    coste = $2
                    descripcion = $3
                    efecto = $4
                where id = $5 returning *`   

    const result = await db.query(sql, params);
    res.json(result);
}

const deleteSpell = async (req,res)=>{

    const params = [req.params.id];
    const sql = `delete from tbl_spells where id =$1`;
    const result = await db.query(sql, params);
    res.json(result)
}

export { getSpell }
export { putSpell }
export { postSpell }
export { deleteSpell }