import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  welcome() {
    const treasureMap = {
      message: '🗺️ Welcome to the ChatGhoul API! 🏴‍☠️',
      clues: [
        "🌴 Follow the path of 'api/' to start the journey.",
        "🦜 Look out for the 'X marks the spot' at each endpoint!",
      ],
      disclaimer: 'Remember, only true adventurers can unlock the secrets...',
    };
    return treasureMap;
  }
}
