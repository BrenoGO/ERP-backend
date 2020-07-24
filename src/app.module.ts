import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { User } from './user.entity'
import { UsersModule } from './users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [User]
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
