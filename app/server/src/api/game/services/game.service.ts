import { Injectable, Inject } from '@nestjs/common';
import {
  GetGamesRequest,
  GetGamesResponse,
  GetGameRequest,
  GetGameResponse,
  UpdateGamesRequest,
  UpdateGamesResponse,
  DeleteGamesRequest,
  DeleteGamesResponse,
  CreateGamesRequest,
  CreateGamesResponse,
} from '../dtos';
import { IGameService, IGameRepository } from '../interfaces';

@Injectable()
export class GameService implements IGameService {
  constructor(@Inject('GameRepository') repo: IGameRepository) {}

  async find(request: GetGamesRequest): Promise<GetGamesResponse> {
    return new GetGamesResponse();
  }

  async findOne(id: string): Promise<GetGameResponse> {
    return new GetGameResponse();
  }

  async create(request: CreateGamesRequest): Promise<CreateGamesResponse> {
    return new CreateGamesResponse();
  }

  async update(request: UpdateGamesRequest): Promise<UpdateGamesResponse> {
    return new UpdateGamesResponse();
  }

  async delete(request: DeleteGamesRequest): Promise<DeleteGamesResponse> {
    return new DeleteGamesResponse();
  }
}
