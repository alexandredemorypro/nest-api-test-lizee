import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    getAvailabilities(): Promise<Product[]> {
        return this.productRepository.find();
    }

    create(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }
}
