import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightModule } from './flights/flights.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ 
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    FlightModule, 
    // MongooseModule.forRoot('mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.n8vhqpf.mongodb.net/?retryWrites=true&w=majority')],
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 