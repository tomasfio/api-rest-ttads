import { Router } from "express";
const router = Router();

//  Database connection
import { connect } from "../database";
import { ObjectId } from "mongodb";

//  categoria/
router.get('/', async (req, res) =>{
    const db = await connect();
    const result = await db.collection('categoria').find({}).toArray();
    console.log(result);
    res.json(result).status(200);
});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('categoria').findOne({_id : ObjectId(id)});
    res.json(result);
})

router.post('/', async (req,res) => {
    const db = await connect();
    const categoria  = {
        name: req.body.name,
        descripcion: req.body.descripcion
    };
    const result = await db.collection('categoria').insert(categoria);
    res.json(result.ops[0]);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('categoria').deleteOne({ _id : ObjectId(id)});

    res.json({
        message: `Categora ${id} eliminada`,
        result
    });
})

router.put('/:id', async (req,res) => {
    const { id } = req.params;
    const updateCategoria = {
        name: req.body.name,
        descripcion: req.body.descripcion
    };

    const db = await connect();
    await db.collection('categoria').updateOne({ _id : ObjectId(id)}, { $set: updateCategoria});

    res.json({
        message: `La categoria con el id ${id} se ha actualizado exitosamente`
    });
});

export default router;