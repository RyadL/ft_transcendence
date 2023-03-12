import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() { 
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: '123',
			
		});
	}

	async validate(payload: any) {
		console.log("LA")
		return {
			id: payload.id,
			login: payload.login,
		};
	}
}
