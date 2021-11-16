import { TatuadorController } from '@/models/tatuador/tatuador.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TatuadorController],
})
export class TatuadorModule {}
