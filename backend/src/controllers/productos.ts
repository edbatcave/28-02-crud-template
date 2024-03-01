import { Request, Response} from 'express';
import Producto from '../models/producto';

export const getProducts = async (req: Request, res: Response) =>{
    const listProducts = await Producto.findAll()

    res.json(listProducts)
}

export const getProduct = async (req: Request, res: Response) =>{
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if(producto){
        res.json(producto)
    }else{
        res.status(404).json({
            msg:  'No existe un producto con ese id'
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) =>{
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if(!producto){
        res.status(404).json({
            msg: 'No existe el producto ñero asi que no joda hdp'
        })
    }else{
        await producto.destroy();
        res.json({
            msg: 'El producto fue eliminado master'
        })
    }
}

export const postProduct = async (req: Request, res: Response)=>{
    const { body } = req;
    
    
    await Producto.create(body);

    res.json({
        msg: 'El producto fue agregado con exito'
    })
}

export const updateProduct = (req: Request, res: Response)=>{
    const { body } = req;
    const { id } = req.params;

    res.json({
        msg: 'Update product',
        id,
        body
    })
}