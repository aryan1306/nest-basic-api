import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatDocument } from './schema/cats.schema';
import { Cat } from './schema/cats.schema';
import { CreateCatsInput } from './dto/cats.input';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCat: CreateCatsInput): Promise<Cat> {
    const createdCat = new this.catModel(createCat);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}
