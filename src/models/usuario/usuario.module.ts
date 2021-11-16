import { UsuarioController } from '@/models/usuario/usuario.controller';
import { Usuario, UsuarioSchema } from '@/models/usuario/usuario.schema';
import { UsuarioService } from '@/models/usuario/usuario.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  providers: [UsuarioService],
  exports: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
