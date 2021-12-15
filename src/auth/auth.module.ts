import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
    imports: [    
        UsersModule,    
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: process.env.SECRETKEY, signOptions: {
                expiresIn: process.env.EXPIRESIN,
                },
            }),
        ], 
        controllers: [AuthController],  
        providers: [AuthService, JwtStrategy],  
        exports: [
            PassportModule, 
            JwtModule
        ],
    })
export class AuthModule {}

