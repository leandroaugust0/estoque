import { getCustomRepository } from "typeorm";
import { Product } from "../entities/Product";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

interface IProductRequest {
  id: string;
  name: string;
  price: number;
}

class UpdateProductService {
  async execute({ id, name, price }: IProductRequest) {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const productExists = await productsRepositories.findOne(id);

    if (!productExists) {
      throw new Error("Product doesn't exists!");
    }

    productsRepositories.update(id, { name, price });
  }
}

export { UpdateProductService };
