import { Controller, Get } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('/contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  contactList() {
    return 'hello contacts';
  }
}
