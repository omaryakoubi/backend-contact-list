import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('/contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async addContact(@Body() contact) {
    try {
      return await this.contactService.create(contact);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async getContactList() {
    return await this.contactService.findAll();
  }

  @Get('/:id')
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
