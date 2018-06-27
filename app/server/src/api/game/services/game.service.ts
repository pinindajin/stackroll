import { Injectable } from '@nestjs/common';
import { GetGamesRequest, GetGamesResponse } from '../dtos/getGame.dto';

@Injectable()
export class GameService {
  async find(request: GetGamesRequest): Promise<GetGamesResponse> {
    return new GetGamesResponse();
  }
}
