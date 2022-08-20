import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
const CONNECTION_STRING =
  'mongodb+srv://kotekirkitadze:omediakote@cluster0.xbfnmvy.mongodb.net/restaurants_database?retryWrites=true';
@Module({
  imports: [
    RestaurantsModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(CONNECTION_STRING),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
