import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
	imports: [PassportModule, JwtModule.register({
		secret: '123',
		signOptions: { expiresIn: '60s' },
	})],
    //controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
	exports: [AuthService]
})
export class AuthModule {}
