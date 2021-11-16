import { AuthenticatedGuard } from '@/authentication/auth/authenticated.guard';
import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

@Controller('tatuador')
export class TatuadorController {
  @UseGuards(AuthenticatedGuard)
  @Post()
  save(): string {
    return 'tatuador save';
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  findAll(): string {
    return 'tatuador findAll';
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  async find(@Param('id') id: string) {
    return { id };
  }
}
