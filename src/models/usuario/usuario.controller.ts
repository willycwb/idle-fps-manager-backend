import { UsuarioDto } from '@/models/usuario/usuario.dto';
import { UsuarioService } from '@/models/usuario/usuario.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: UsuarioDto) {
    return await this.service.create(createUsuarioDto);
  }
}
