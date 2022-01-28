import { getCustomRepository } from "typeorm";
import { Product } from "../entities/Product";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

class DeleteProductService {
  async execute(id: string) {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const productNotExists = await productsRepositories.findOne({
      id,
    });

    if (!productNotExists) {
      throw new Error("Product not exists!");
    }

    await productsRepositories.delete(id);

    
  }
}

export { DeleteProductService };
