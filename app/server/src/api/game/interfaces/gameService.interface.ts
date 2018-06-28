import { IServiceFindResponse } from '../../../common/interfaces/IServiceFindResponse.interface';
import { Game } from '../models/domain/game.model';
import {
  GetGamesRequest,
  GetGameResponse,
  DeleteGamesResponse,
  DeleteGamesRequest,
  CreateGamesRequest,
  CreateGamesResponse,
  UpdateGamesRequest,
  UpdateGamesResponse,
} from '../models/dtos';

export interface IGameService {
  find(request: GetGamesRequest): Promise<IServiceFindResponse<Game>>;
  findOne(id: string): Promise<GetGameResponse>;
  create(request: CreateGamesRequest): Promise<CreateGamesResponse>;
  update(request: UpdateGamesRequest): Promise<UpdateGamesResponse>;
  delete(request: DeleteGamesRequest): Promise<DeleteGamesResponse>;
}
