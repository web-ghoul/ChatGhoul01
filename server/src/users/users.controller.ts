import { Body, Controller, Get, Put, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FileSizeValidation } from 'src/pipes/file_size_validation.pipe';
import multerOptions from 'src/utils/multerConfig.util';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get("profile")
  async profile(@Req() req, @Res() res: Response) {
    try {
      const user = req.user
      if (user) {
        const profileInfo = await this.usersService.profile(user._id);
        return res.status(200).json({
          data: profileInfo
        })
      }
      return res.status(500).json({
        message: "Server Error"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Put('avatar')
  @UseInterceptors(FileInterceptor('avatar', multerOptions))
  async updateAvatar(
    @UploadedFile(new FileSizeValidation()) file: Express.Multer.File,
    @Res() res: Response, @Req() req) {
    try {
      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      const user = req.user
      if (user && file) {
        const avatar = await this.usersService.updateAvatar(file, user._id);
        console.log(avatar)
        return res.status(200).json({
          avatar,
          message: "Avatar is uploaded successfully"
        })
      }
      return res.status(500).json({
        message: "Server Error"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Put('chat_theme')
  @UseInterceptors(FileInterceptor('chat_theme', multerOptions))
  async updateChatTheme(
    @UploadedFile(new FileSizeValidation()) file: Express.Multer.File,
    @Res() res: Response,
    @Req() req
  ) {
    try {
      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      const user = req.user
      if (user && file) {
        const chat_theme = await this.usersService.updateChatTheme(file, user._id);
        return res.status(200).json({
          chat_theme,
          message: "Chat Theme is uploaded successfully"
        })
      }
      return res.status(500).json({
        message: "Server Error"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Put()
  async update(@Body() body: UpdateUserDto, @Req() req, @Res() res: Response) {
    try {
      const user = req.user
      if (user) {
        await this.usersService.update(body.email ? { ...body, email: body.email.toLowerCase() } : body, user._id);
        return res.status(200).json({
          message: "User is uploaded successfully"
        })
      }
      return res.status(500).json({
        message: "Server Error"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
