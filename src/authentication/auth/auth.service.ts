import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../../models/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

  async validarUsuario(login: string, senha: string): Promise<any> {
    const usuario = await this.usuarioService.findOne(login);

    if (usuario && usuario.senha === senha) {
      // const { senha, login, ...rest } = usuario;
      return usuario;
    }

    return null;
  }
}
