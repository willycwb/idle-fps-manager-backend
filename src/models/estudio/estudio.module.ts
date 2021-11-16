import { EstudioController } from '@/models/estudio/estudio.controller';
import { Estudio, EstudioSchema } from '@/models/estudio/estudio.schema';
import { EstudioService } from '@/models/estudio/estudio.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Estudio.name, schema: EstudioSchema }]),
  ],
  controllers: [EstudioController],
  providers: [EstudioService],
})
export class EstudioModule {}
