import {
  GetGamesRequest,
  GetGameRequest,
  GetGamesResponse,
  GetGameResponse,
} from '../dtos/getGame.dto';
import {
  CreateGamesRequest,
  CreateGamesResponse,
} from '../dtos/createGame.dto';
import {
  UpdateGamesRequest,
  UpdateGamesResponse,
} from '../dtos/updateGame.dto';
import {
  DeleteGamesResponse,
  DeleteGamesRequest,
} from '../dtos/deleteGameDto.dto';

export interface IGameService {
  find(request: GetGamesRequest): Promise<GetGamesResponse>;
  findOne(id: string): Promise<GetGameResponse>;
  create(request: CreateGamesRequest): Promise<CreateGamesResponse>;
  update(request: UpdateGamesRequest): Promise<UpdateGamesResponse>;
  delete(request: DeleteGamesRequest): Promise<DeleteGamesResponse>;
}
