import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ContactService } from './contact.service';
import { CreateContactDto } from './contact.dto';

@Controller('/contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async addContact(@Body() contact: CreateContactDto) {
    try {
      const phoneNumberExists = await this.contactService.findByPhoneNumber(
        contact.phoneNumber,
      );
      const emailExists = await this.contactService.findByEmail(contact.email);

      if (phoneNumberExists) {
        return {
          message: 'phoneNumber already exists',
        };
      } else if (emailExists) {
        return {
          message: 'email already exists',
        };
      }
      return await this.contactService.create(contact);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async getContactList() {
    return await this.contactService.findAll();
  }

  @Get(':id')
  async getContactById(@Param() id: string) {
    try {
      return await this.contactService.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Put('/:id')
  async updateContact(@Param() id: string, @Body() contact) {
    try {
      return await this.contactService.findByIdAndUpdate(id, contact);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  async deleteContact(@Param() id: string) {
    try {
      return await this.contactService.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
