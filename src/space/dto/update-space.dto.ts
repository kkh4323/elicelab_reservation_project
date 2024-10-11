import { PartialType } from '@nestjs/swagger';
import { CreateSpaceDto } from '@space/dto/create-space.dto';

export class UpdateSpaceDto extends PartialType(CreateSpaceDto) {}
