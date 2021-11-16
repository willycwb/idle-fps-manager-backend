import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EstudioDocument = Estudio & Document;

@Schema()
export class Estudio {
  @Prop()
  id: string;

  @Prop()
  nome_estudio: string;
}

export const EstudioSchema = SchemaFactory.createForClass(Estudio);
