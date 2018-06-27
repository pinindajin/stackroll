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
  find(request: GetGamesRequest): GetGamesResponse;
  findOne(request: GetGameRequest): GetGameResponse;
  create(request: CreateGamesRequest): CreateGamesResponse;
  update(request: UpdateGamesRequest): UpdateGamesResponse;
  delete(request: DeleteGamesRequest): DeleteGamesResponse;
}
