import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.jwtSecret'),
    });
  }

  async validate(payload: any): Promise<any> {
    if (!payload) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return payload;
  }
}
