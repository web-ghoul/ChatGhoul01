import { Body, Controller, Get, Post, Query, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FileSizeValidation } from '../pipes/file_size_validation.pipe';
import multerOptions from '../utils/multerConfig.util';
import { AvatarsService } from './avatars.service';
import { UploadAvatarsDto } from './dto/UploadAvatars.dto';

@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) { }

  @Post()
  @UseInterceptors(FilesInterceptor('avatars', 1000, multerOptions))
  async uploadAvatars(@Body() body: UploadAvatarsDto, @UploadedFiles(new FileSizeValidation()) files: Express.Multer.File[], @Res() res: Response) {
    try {
      if (!files || files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }
      await this.avatarsService.uploadAvatars(body, files);
      return res.status(201).json({
        message: "Avatars are uploaded successfully"
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Get()
  async getAllAvatars(@Res() res: Response, @Query() query) {
    try {
      const data = await this.avatarsService.getAllAvatars(query);
      return res.status(200).json(data)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
