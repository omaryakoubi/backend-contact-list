import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDto } from './contact.dto';

import { ContactInterface } from './contact.interface';
import { Contact, ContactDocument } from './contact.model';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
  ) {}

  async create(contact: CreateContactDto): Promise<ContactInterface> {
    try {
      return await this.contactModel.create(contact);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<ContactInterface[]> {
    try {
      return await this.contactModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findByIdAndUpdate(
    id: string,
    contact: ContactInterface,
  ): Promise<ContactInterface> {
    try {
      return await this.contactModel.findByIdAndUpdate(id, {
        contact,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string): Promise<ContactInterface> {
    try {
      return await this.contactModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  async findByPhoneNumber(phoneNumber: number): Promise<ContactInterface> {
    try {
      return await this.contactModel.findOne({ phoneNumber });
    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail(email: string): Promise<ContactInterface> {
    try {
      return await this.contactModel.findOne({ email });
    } catch (error) {
      console.log(error);
    }
  }

  async findByIdAndDelete(id: string): Promise<ContactInterface> {
    try {
      return await this.contactModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
