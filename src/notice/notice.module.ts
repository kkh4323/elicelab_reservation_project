import { Module } from '@nestjs/common';
import { NoticeService } from '@notice/notice.service';
import { NoticeController } from '@notice/notice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from '@notice/entities/notice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notice])],
  controllers: [NoticeController],
  providers: [NoticeService],
})
export class NoticeModule {}
