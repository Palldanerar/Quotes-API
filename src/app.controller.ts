import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import IQuote from './Interface/IQuote';
import IError from './Interface/IError';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/quote')
  getQuote(): IQuote {
    return this.appService.getQuote();
  }

  @Get('/quotes')
  getAllQuotes(): IQuote[] {
    return this.appService.getAllQuotes();
  }

  @Get('/quote/:id')
  getIdQuote(@Param('id', ParseIntPipe) id: number): IQuote | IError {
    return this.appService.getIdQuote(id);
  }
}
