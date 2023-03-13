import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [CategoryModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule { }
