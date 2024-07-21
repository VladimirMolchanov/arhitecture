import {IProductRepository} from "../../domain/boundaries/inputs/product.repository";
import {Product} from "../../domain/entites/store/models/product";

export class ProductFakeApi implements IProductRepository {
    private products: Product[] = [
        {
            id: '0000-0000-0000-0001',
            name: 'product1',
            price: 1000
        },
        {
            id: '0000-0000-0000-0002',
            name: 'product2',
            price: 1000
        }
    ]

    public getAll(): Promise<Product[]> {
        return Promise.resolve(this.products)
    }

    public getById(id: Product["id"]): Promise<Product | undefined> {
        const product = this.products.find((product) => {
            return product.id === id
        })

        return Promise.resolve(product)
    }
}