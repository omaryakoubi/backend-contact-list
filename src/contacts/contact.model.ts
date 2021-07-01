import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  email: string;

  @Prop({ required: true, unique: true })
  phoneNumber: number;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
