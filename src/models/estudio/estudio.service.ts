import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EstudioDto } from '@/models/estudio/estudio.dto';
import { Estudio, EstudioDocument } from '@/models/estudio/estudio.schema';

@Injectable()
export class EstudioService {
  constructor(
    @InjectModel(Estudio.name) private estudioModel: Model<EstudioDocument>,
  ) {}

  async create(createEstudioDto: EstudioDto): Promise<Estudio> {
    return await new this.estudioModel(createEstudioDto).save();
  }

  async update(id: string, updateEstudioDto: EstudioDto): Promise<Estudio> {
    return await this.estudioModel
      .findByIdAndUpdate(id, updateEstudioDto)
      .exec();
  }

  async delete(id: string): Promise<Estudio> {
    return await this.estudioModel.findByIdAndDelete(id).exec();
  }

  async findAll(): Promise<Estudio[]> {
    return await this.estudioModel.find().exec();
  }

  async findOne(id: string): Promise<Estudio> {
    return await this.estudioModel.findById(id).exec();
  }
}
