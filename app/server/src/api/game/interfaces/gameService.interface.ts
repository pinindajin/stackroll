import {
  GetGamesRequest,
  GetGamesResponse,
  GetGameResponse,
  DeleteGamesResponse,
  DeleteGamesRequest,
  CreateGamesRequest,
  CreateGamesResponse,
  UpdateGamesRequest,
  UpdateGamesResponse,
} from '../models/dtos';

export interface IGameService {
  find(request: GetGamesRequest): Promise<GetGamesResponse>;
  findOne(id: string): Promise<GetGameResponse>;
  create(request: CreateGamesRequest): Promise<CreateGamesResponse>;
  update(request: UpdateGamesRequest): Promise<UpdateGamesResponse>;
  delete(request: DeleteGamesRequest): Promise<DeleteGamesResponse>;
}
