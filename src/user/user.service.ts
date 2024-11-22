import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Response } from 'express';

@Injectable()
export class UserService {
  constructor(private prisma : PrismaService){}
  async create(createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const response = await this.prisma.user.create({
        data: createUserDto,
      });
      if (!response) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
    return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      console.error(error);
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
