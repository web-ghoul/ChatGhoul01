import { Body, Controller, Delete, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { DeleteMessageDto } from './dto/deleteMessages.dto';
import { EditMessageDto } from './dto/editMessage.dto';
import { SendMessageDto } from './dto/sendMessage.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) { }

  @Post(":id")
  async sendMsg(@Body() body: SendMessageDto, @Param() id: string, @Req() req, @Res() res: Response) {
    try {
      const room = req.room
      const user = req.user
      const { message, chatRoom } = await this.messagesService.sendMsg(body, user._id, id, room);
      res.status(200).json({
        message,
        chatRoom
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Put(":id")
  async editMsg(@Body() body: EditMessageDto, @Param() id: string) {
    return this.messagesService.editMsg(body);
  }

  @Delete()
  async deleteMsg(@Body() body: DeleteMessageDto) {
    return this.messagesService.deleteMsg(body);
  }
}
