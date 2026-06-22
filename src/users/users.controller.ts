import { Controller, Get, Post, Patch, Delete, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { IsUUID, IsString, IsOptional, IsEmail, IsNotEmpty } from 'class-validator';

class CreateProfileDto {
  @IsUUID()
  @IsNotEmpty()
  id!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsUUID()
  @IsOptional()
  organizationId?: string;
}

class UpdateProfileDto {
  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsUUID()
  @IsOptional()
  organizationId?: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createDto: CreateProfileDto) {
    return this.usersService.createUser(createDto);
  }

  @Get(':id')
  async get(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateDto: UpdateProfileDto,
  ) {
    return this.usersService.updateUser(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.deleteUser(id);
  }
}
