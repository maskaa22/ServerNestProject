import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable,} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Observable} from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader.split(' ')[1];

            req.user = this.jwtService.verify(token);
            return true;
        } catch (e) {
            throw new HttpException('User is not autorization', HttpStatus.UNAUTHORIZED);
        }
    }

}
