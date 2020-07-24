import { Controller, Get, Param } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findOne(@Param('id') id:string ): Promise<string> {
    const user = await this.usersService.findOne(id)
    return user.lastName
  }
}
