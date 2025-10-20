import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api/hello')
  getHello(): string {
    return `hello api!`;
  }
}
