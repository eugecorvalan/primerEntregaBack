import { Router } from "express";
import productsRouters from "./productsRoutes.js";
import cartsRouters from "./carts.routes.js";
const router = Router();

router.use("/products", productsRouters);
router.use("/carts", cartsRouters);

export default router;