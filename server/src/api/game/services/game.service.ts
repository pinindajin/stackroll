import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  root(): string {
    return 'Hello World!';
  }
}
