import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';


import { AppService } from './app.service';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [FlightModule, MongooseModule.forRoot('mongodb+srv://s7arborne:2Oc4MBHaO40tJXCp@cluster0.5vyrd.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
