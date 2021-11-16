import { UsuarioDto } from '@/models/usuario/usuario.dto';
import { Usuario, UsuarioDocument } from '@/models/usuario/usuario.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}
  async create(createUsuarioDto: UsuarioDto): Promise<Usuario> {
    return await new this.usuarioModel(createUsuarioDto).save();
  }
  async findOne(login: string): Promise<Usuario | undefined> {
    return await this.usuarioModel.findOne({ login }).exec();
  }
}
