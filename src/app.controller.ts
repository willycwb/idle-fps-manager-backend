import { AppService } from '@/app.service';
import { AuthenticatedGuard } from '@/authentication/auth/authenticated.guard';
import { LocalAuthGuard } from '@/authentication/auth/local-auth.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return {
      msg: 'Logeed in!',
      login: req.user._doc.login,
      nome: req.user._doc.nome,
    };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
