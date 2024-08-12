import { Router } from "express";
import { updateProduct, addProduct } from '../controllers/forms.controller.js';

const router = Router();

router.put("/update-product", updateProduct);
router.post("/add-product", addProduct); // Nueva ruta para agregar productos

export default router;