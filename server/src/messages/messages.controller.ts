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
  async sendMsg(@Body() body: SendMessageDto, @Param('id') id: string, @Req() req, @Res() res: Response) {
    try {
      const room = req.room
      const user = req.user
      const { message, chatRoom } = await this.messagesService.sendMsg(body, user._id, id, room);
      return res.status(201).json({
        message: "Message is sent successfully",
        data: {
          message,
          chatRoom
        }
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Put(":id")
  async editMsg(@Body() body: EditMessageDto, @Param("id") id: string, @Res() res: Response) {
    try {
      await this.messagesService.editMsg(body, id);
      return res.status(200).json({
        message: "Message is updated successfully"
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Delete()
  async deleteMsg(@Body() body: DeleteMessageDto, @Res() res: Response) {
    try {
      await this.messagesService.deleteMsg(body);
      return res.status(200).json({
        message: `${body.messages.length > 1 ? "Messages are" : "Message is"} deleted successfully`
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
