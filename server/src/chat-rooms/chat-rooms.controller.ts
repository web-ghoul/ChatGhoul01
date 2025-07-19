import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { ChatRoomsService } from './chat-rooms.service';

@Controller('chat-rooms')
export class ChatRoomsController {
  constructor(private readonly chatRoomsService: ChatRoomsService) { }

  @Get()
  async getAllChatRooms(@Req() req, @Res() res, @Query() query) {
    try {
      const user = req.user
      const data = await this.chatRoomsService.getAllChatRooms(user._id, query);
      return res.status(200).json(data)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Get(":id")
  async getChatRoom(@Res() res, @Query() query, @Param("id") id) {
    try {
      const data = await this.chatRoomsService.getChatRoom(id, query);
      return res.status(200).json(data)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
