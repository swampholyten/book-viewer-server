import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { DataService } from './data.service';
import { Response } from 'express';

@Controller('api')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('data')
  async getData(@Res() res: Response): Promise<void> {
    try {
      const data = await this.dataService.getData();
      res.status(HttpStatus.OK).json(data);
    } catch (err) {
      console.error('Error fetching data:', err);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Internal Server Error');
    }
  }
}
