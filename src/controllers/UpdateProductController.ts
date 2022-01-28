import { Request, Response } from "express";
import { UpdateProductService } from "../services/UpdateProductService";

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { name, price } = request.body;
    const { id } = request.params;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute({id, name, price});

    return response.json(product);
  }
}

export { UpdateProductController };
