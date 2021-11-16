import { UsuarioDto } from '@/models/usuario/usuario.dto';

describe('UsuarioDto', () => {
  it('should be defined', () => {
    expect(new UsuarioDto()).toBeDefined();
  });
});
