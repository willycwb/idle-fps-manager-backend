import { AuthenticatedGuard } from '@/authentication/auth/authenticated.guard';
import { EstudioController } from '@/models/estudio/estudio.controller';
import { EstudioService } from '@/models/estudio/estudio.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('EstudioController', () => {
  let controller: EstudioController;
  let provider: AuthenticatedGuard;
  let service: EstudioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudioController],
      providers: [
        {
          provide: EstudioService,
          useValue: {
            index: jest.fn(),
            find: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
      imports: [AuthenticatedGuard],
    }).compile();

    controller = module.get<EstudioController>(EstudioController);
    service = module.get<EstudioService>(EstudioService);
    provider = module.get<AuthenticatedGuard>(AuthenticatedGuard);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(provider).toBeDefined();
  });
});
