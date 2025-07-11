import { Controller, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { SendMessageDto } from './dto/sendMessage.dto';
import { EditMessageDto } from './dto/editMessage.dto';
import { DeleteMessageDto } from './dto/deleteMessages.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) { }

  @Post(":id")
  sendMsg(@Body() body: SendMessageDto, @Param() id: string) {
    return this.messagesService.sendMsg(body);
  }

  @Put(":id")
  editMsg(@Body() body: EditMessageDto, @Param() id: string) {
    return this.messagesService.editMsg(body);
  }

  @Delete()
  deleteMsg(@Body() body: DeleteMessageDto) {
    return this.messagesService.deleteMsg(body);
  }
}
