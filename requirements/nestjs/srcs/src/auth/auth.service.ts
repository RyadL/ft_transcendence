import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Req } from '@nestjs/common';

@Injectable({})
export class AuthService {
    
	constructor(private jwtService: JwtService) {}

//	login(user: any) {
//        	return { msg: "I am logged in 974 667" };
//    	}

//	async login(user: any) {
//		const payload = { name: user.name }
//
//		return {
//			access_token: this.jwtService.sign(payload),
//		}
//	}
	
	async login(user: any) {
		const id = 1
		const login = "dgauvin"
		const payload = { id: id, login: login }

		return {
			assess_token: this.jwtService.sign(payload),
		}
	}
	
}
