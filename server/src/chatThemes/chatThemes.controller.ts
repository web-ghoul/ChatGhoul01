import { Controller, Get, Post, Query, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FileSizeValidation } from '../pipes/file_size_validation.pipe';
import multerOptions from '../utils/multerConfig.util';
import { ChatThemesService } from './chatThemes.service';

@Controller('chat_themes')
export class ChatThemesController {
  constructor(private readonly chatThemesService: ChatThemesService) { }

  @Post()
  @UseInterceptors(FilesInterceptor('chat_themes', 1000, multerOptions))
  async uploadChatThemes(@UploadedFiles(new FileSizeValidation()) files: Express.Multer.File[], @Res() res: Response) {
    try {
      if (!files || files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }
      await this.chatThemesService.uploadChatThemes(files);
      return res.status(201).json({
        message: "Chat Themes are uploaded successfully"
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Get()
  async getAllChatThemes(@Res() res: Response, @Query() query) {
    try {
      const data = await this.chatThemesService.getAllChatThemes(query);
      return res.status(200).json(data)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
