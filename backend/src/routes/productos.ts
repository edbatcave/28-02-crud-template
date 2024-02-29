import { Router } from "express";
import { getProducts, getProduct, deleteProduct, postProduct, updateProduct } from "../controllers/productos";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id',deleteProduct);
router.post('/',postProduct);
router.put('/:id',updateProduct);

export default router;