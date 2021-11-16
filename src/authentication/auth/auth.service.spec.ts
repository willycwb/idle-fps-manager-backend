import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from '../../models/usuario/usuario.service';
import { AuthService } from './auth.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsuarioDocument } from '@/models/usuario/usuario.schema';

describe('AuthService', () => {
  let authService: AuthService;
  let usuarioService: UsuarioService;
  let model: Model<UsuarioDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsuarioService,
        {
          provide: getModelToken('Usuario'),
          // notice that only the functions we call from the model are mocked
          useValue: {
            new: jest.fn().mockResolvedValue({}),
            constructor: jest.fn().mockResolvedValue({}),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usuarioService = module.get<UsuarioService>(UsuarioService);
    model = module.get<Model<UsuarioDocument>>(getModelToken('Usuario'));
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
    expect(usuarioService).toBeDefined();
    expect(model).toBeDefined();
  });
});
