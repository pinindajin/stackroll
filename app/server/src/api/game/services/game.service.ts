import { Injectable, Inject } from '@nestjs/common';
import {
  GetGamesRequest,
  GetGamesResponse,
  GetGameResponse,
  UpdateGamesRequest,
  UpdateGamesResponse,
  DeleteGamesRequest,
  DeleteGamesResponse,
  CreateGamesRequest,
  CreateGamesResponse,
} from '../models/dtos';
import { IGameService, IGameStore } from '../interfaces';
import { Game } from '../models/game.model';

@Injectable()
export class GameService implements IGameService {
  constructor(@Inject('GameRepository') private readonly repo: IGameStore) {}

  async find(request: GetGamesRequest): Promise<GetGamesResponse> {
    return new GetGamesResponse();
  }

  async findOne(id: string): Promise<GetGameResponse> {
    return new GetGameResponse();
  }

  async create(request: CreateGamesRequest): Promise<CreateGamesResponse> {
    const gamesToCreate = request.GamesToCreate.map(_game => {
      return new Game({
        name: _game.name,
        description: _game.description,
      });
    });

    const createdGames = await this.repo.create(gamesToCreate);

    return new CreateGamesResponse();
  }

  async update(request: UpdateGamesRequest): Promise<UpdateGamesResponse> {
    return new UpdateGamesResponse();
  }

  async delete(request: DeleteGamesRequest): Promise<DeleteGamesResponse> {
    return new DeleteGamesResponse();
  }
}
