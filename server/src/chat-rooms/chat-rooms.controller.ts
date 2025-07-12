import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChatRoomsService } from './chat-rooms.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';

@Controller('chat-rooms')
export class ChatRoomsController {
  constructor(private readonly chatRoomsService: ChatRoomsService) { }

  @Post()
  async create(@Body() body: CreateChatRoomDto) {
    try {
      const room = this.chatRoomsService.create(body);
    } catch (error) {

    }
  }

  @Get()
  async getAllChatRooms() {
    return this.chatRoomsService.getAllChatRooms();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.chatRoomsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChatRoomDto: UpdateChatRoomDto) {
    return this.chatRoomsService.update(+id, updateChatRoomDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.chatRoomsService.remove(+id);
  }
}
