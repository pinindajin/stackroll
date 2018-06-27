import { Injectable } from '@nestjs/common';
import { GetGamesRequest } from '../dtos/getGame.dto';

@Injectable()
export class GameService {
  async find(request: GetGamesRequest): Promise<string> {
    return `::: ${JSON.stringify(request)} ${request instanceof
      GetGamesRequest} ${Array.isArray(request.ids)}`;
  }
}
