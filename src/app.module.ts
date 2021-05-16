import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { join } from 'path';
import { CatsResolver } from './cats/cats.resolver';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.lxjvp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    ),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
