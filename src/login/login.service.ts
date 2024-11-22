import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Response } from 'express';
import { Res } from '@nestjs/common';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async create(createLoginDto: CreateLoginDto, @Res() res: Response) {
    try {
      const result = await this.prisma.user.findUnique({
        where: {
          email: createLoginDto.email,
          password: createLoginDto.password,
        },
      });

      if (!result) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }

      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      console.error(error);
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}