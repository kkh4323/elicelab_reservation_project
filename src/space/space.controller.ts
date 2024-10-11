import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SpaceService } from '@space/space.service';
import { CreateSpaceDto } from '@space/dto/create-space.dto';
import { RoleGuard } from '@auth/guardies/role.guard';
import { Role } from '@user/entities/role.enum';
import { Space } from '@space/entities/space.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('space')
@ApiTags('space')
export class SpaceController {
  constructor(private readonly spaceService: SpaceService) {}

  @Post('/create')
  @UseGuards(RoleGuard(Role.ADMIN))
  async createSpace(@Body() createSpaceDto: CreateSpaceDto): Promise<Space> {
    return await this.spaceService.createSpace(createSpaceDto);
  }

  @Get()
  async getSpaces(): Promise<Space[]> {
    return await this.spaceService.getSpaces();
  }

  @Get('/:id')
  async getSpaceById(@Param('id') id: string): Promise<Space> {
    return await this.spaceService.getSpaceById(id);
  }

  @Put('/:id')
  @UseGuards(RoleGuard(Role.ADMIN))
  async updateSpaceById(
    @Param('id') id: string,
    @Body() updateSpaceDto: CreateSpaceDto,
  ): Promise<string> {
    return await this.spaceService.updateSpaceById(id, updateSpaceDto);
  }

  @Delete('/:id')
  @UseGuards(RoleGuard(Role.ADMIN))
  async deleteSpaceById(@Param('id') id: string): Promise<string> {
    return await this.spaceService.deleteSpaceById(id);
  }
}
