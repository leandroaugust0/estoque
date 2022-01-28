import { Request, Response } from "express";
import { DeleteProductService } from "../services/DeleteProductService";

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteProductService = new DeleteProductService();

    const product = await deleteProductService.execute(id);

    return response.json(product);
  }
}

export { DeleteProductController };
