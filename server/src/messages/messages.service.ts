import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/sendMessage.dto';
import { EditMessageDto } from './dto/editMessage.dto';
import { DeleteMessageDto } from './dto/deleteMessages.dto';

@Injectable()
export class MessagesService {
  sendMsg(body: SendMessageDto) {
    return 'This action adds a new message';
  }

  editMsg(body: EditMessageDto) {
    return 'This action adds a new message';
  }

  deleteMsg(body: DeleteMessageDto) {
    return 'This action adds a new message';
  }
}
