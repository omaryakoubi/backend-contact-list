import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/contactList'),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
