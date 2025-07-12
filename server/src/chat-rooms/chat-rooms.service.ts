import { Injectable } from '@nestjs/common';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';

@Injectable()
export class ChatRoomsService {
  async create(body: CreateChatRoomDto) {
    return 'This action adds a new chatRoom';
  }

  async getAllChatRooms() {
    return `This action returns all chatRooms`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} chatRoom`;
  }

  async update(id: number, updateChatRoomDto: UpdateChatRoomDto) {
    return `This action updates a #${id} chatRoom`;
  }

  async remove(id: number) {
    return `This action removes a #${id} chatRoom`;
  }
}
