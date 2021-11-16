import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(); // config
  }

  async validate(login: string, senha: string): Promise<any> {
    const usuario = await this.authService.validarUsuario(login, senha);

    if (!usuario) {
      throw new UnauthorizedException();
    }

    return usuario;
  }
}
