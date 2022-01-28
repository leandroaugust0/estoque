import { getCustomRepository } from "typeorm";
import { server } from "../app";
import { Product } from "../entities/Product";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

interface IProductRequest {
  name: string;
  price: number;
}

class CreateProductService {
  async execute({ name, price }: IProductRequest): Promise<Product> {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const productAlreadyExists = await productsRepositories.findOne({
      name,
    });

    if (productAlreadyExists) {
      throw new Error("Product already exists!");
    }

    const product = productsRepositories.create({
      name,
      price,
    });

    await productsRepositories.save(product);

    server.send(
      `Adicionado produto, nome: ${product.name.toString()}, preço: ${product.price.toString()} reais`
    );

    return product;
  }
}

export { CreateProductService };
