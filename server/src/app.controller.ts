import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  welcome() {
    return this.appService.welcome();
  }

  @Get("/all")
  async getAllData(@Req() req, @Res() res) {
    try {
      const user = req.user
      console.log(user)
      const data = await this.appService.getAllData(user._id)
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
      res.status(500).json("Server Error")
    }
  }
}
