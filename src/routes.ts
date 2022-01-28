import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { ListProductController } from "./controllers/ListProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";

const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const router = Router();

router.post("/products", createProductController.handle);

router.get("/list", listProductController.handle);

router.put("/update/:id", updateProductController.handle);

router.delete("/delete/:id", deleteProductController.handle);

export { router };
