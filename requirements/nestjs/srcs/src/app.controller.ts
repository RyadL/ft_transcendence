import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
	constructor(private appService: AppService) {}

	@Post('login')
	login(@Req() req): any {
		return this.appService.login(req.user);
		//return this.appService.login(req);
		//return { msg: req}
	}

	@UseGuards(JwtAuthGuard)
	@Get('protected')
	testauthentication(@Req() req): string {
		return req.user;	
	}
	//testauthentication() {
	//	return "C OKè"
	//}
}
