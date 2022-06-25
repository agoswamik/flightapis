import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightModule } from './flights/flights.module';

@Module({
  imports: [FlightModule, MongooseModule.forRoot('mongodb+srv://redhatpanda:MFAxjykrwHSFny0R@cluster0.n8vhqpf.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 