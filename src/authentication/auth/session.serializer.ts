import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    // done(null, {id: user.id});
    done(null, user);
  }
  deserializeUser(payload: any, done: (err: Error, payload: any) => void): any {
    //const user = this.usuarioService.findById(payload.id);
    done(null, payload);
  }
}