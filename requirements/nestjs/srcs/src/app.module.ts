import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from "./auth/auth.service";
import { AppController} from './app.controller';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
