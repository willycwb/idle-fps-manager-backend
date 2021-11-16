import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EstudioDocument } from '@/models/estudio/estudio.schema';
import { EstudioService } from '@/models/estudio/estudio.service';

describe('EstudioService', () => {
  let service: EstudioService;
  let model: Model<EstudioDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstudioService,
        {
          provide: getModelToken('Estudio'),
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

    service = module.get<EstudioService>(EstudioService);
    model = module.get<Model<EstudioDocument>>(getModelToken('Estudio'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(model).toBeDefined();
  });
});
