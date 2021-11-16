import { AuthenticatedGuard } from '@/authentication/auth/authenticated.guard';
import { TatuadorController } from '@/models/tatuador/tatuador.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('TatuadorController', () => {
  let controller: TatuadorController;
  let provider: AuthenticatedGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TatuadorController],
      imports: [AuthenticatedGuard],
    }).compile();

    controller = module.get<TatuadorController>(TatuadorController);
    provider = module.get<AuthenticatedGuard>(AuthenticatedGuard);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(provider).toBeDefined();
  });
});
