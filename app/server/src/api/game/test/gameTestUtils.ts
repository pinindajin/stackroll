import { Game } from '../models/domain/game.model';
import { IGameService } from '../interfaces/IGameService.interface';
import { ServiceFindResponse } from '../../../common/models/serviceFindResponse.model';
import { GetGamesRequest } from '../models/dtos/getGame.dto';
import { CreateGamesRequest, CreateGamesResponse } from '../models/dtos/createGame.dto';
import { UpdateGamesRequest, DeleteGamesRequest } from '../models/dtos';
import { UpdateGamesResponse } from '../models/dtos/updateGame.dto';
import { DeleteGamesResponse } from '../models/dtos/deleteGameDto.dto';
import { IGameStore } from '../interfaces';
import { IStoreFindRequest, IStoreFindResponse, IStoreSaveResponse } from '../../../common/interfaces/store';
import { StoreFindResponse } from '../../../common/models/storeFindResponse.model';
import { StoreSaveResponse } from '../../../common/models/storeSaveResponse.model';

export class MockGameStore implements IGameStore {
  async find(ids: IStoreFindRequest): Promise<IStoreFindResponse<Game>> {
    return new StoreFindResponse();
  }

  async findOne(id: string): Promise<Game> {
    return new Game();
  }

  async create(games: Array<Game>): Promise<IStoreSaveResponse<string>> {
    return new StoreSaveResponse();
  }

  async update(games: Array<Game>): Promise<IStoreSaveResponse<string>> {
    return new StoreSaveResponse();
  }

  async delete(ids: Array<string>): Promise<IStoreSaveResponse<string>> {
    return new StoreSaveResponse();
  }
}

export class MockGameService implements IGameService {
  async find(request: GetGamesRequest): Promise<ServiceFindResponse<Game>> {
    return new ServiceFindResponse();
  }

  async findOne(id: string): Promise<Game> {
    return new Game();
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

export const getMockGames = () => {
  return [
    new Game({
      id: 'd28bd6cc-8766-4921-938d-3b5173efe556',
      name: 'Dnd5th - Monk',
      description: 'My dnd 5th monk',
    }),
    new Game({
      id: 'd3093668-541e-450c-b2de-b2e0de1dd2ed',
      name: 'Warhammer - Plains Battle',
      description: 'Weekly WH game with gaming group',
    }),
    new Game({
      id: '7906a667-576c-4456-ba92-f2d16b1f7a56',
      name: 'Darandar Lando',
      description: 'Best Bard/Fighter Ever',
    }),
    new Game({
      id: '94523152-7a0e-457a-a893-6eba92ce3cba',
      name: 'Cthuluhulu',
      description: 'Smidget Smith Worlds of Darkness char.',
    }),
    new Game({
      id: 'e68dde8d-c08c-4025-a7e0-cf9162389dfe',
      name: 'Tinkle Tom',
      description: 'GURPS CHAR',
    }),
    new Game({
      id: '935a0fad-0f37-44cf-9bbe-fd2a54520e7a',
      name: 'Jeremy Tang',
      description: 'House on Haunted Hill',
    }),
    new Game({
      id: '2f875e37-29f6-459c-92bb-87ff43e9c8a2',
      name: 'Math Calculus Form',
      description: 'Calculus Formulas',
    }),
    new Game({
      id: 'acc3447d-915c-4e4f-bb23-415bb38867fe',
      name: 'Warhammer RPG',
      description: 'Rolls for Warhammer RPG group',
    }),
    new Game({
      id: 'a0a8c739-8109-4477-a4b0-9946ae89bfa6e',
      name: 'Yarum Tool',
      description: 'Firefly Universe Character',
    }),
    new Game({
      id: '11a02ddc-0653-459d-a423-9e3dd70c7ff6',
      name: 'Poppy',
      description: 'LoL RPG',
    }),
    new Game({
      id: '0b159fa4-07ca-43d3-9b89-33100f0f8589',
      name: 'Fiora Grims',
      description: 'World of Darkness homebrew',
    }),
    new Game({
      id: 'a0e5c76f-1248-4937-9b99-bd6c23bfbc71',
      name: 'Statistics Quick Rolls',
      description: 'Statistics Formulas',
    }),
    new Game({
      id: 'd4f09f90-4ddf-426e-b570-e75befa682f3',
      name: 'Ship Calcs',
      description: 'Ship RPG',
    }),
    new Game({
      id: '2d935df4-4b21-4969-8aff-901f6a7e2f59',
      name: 'Firing Solutions',
      description: 'Firing solution rolls',
    }),
    new Game({
      id: '6214e1f8-b01d-4310-bd8f-015af7e7e8a3',
      name: 'Dndd 3.5 ya baby',
      description: '3.5 Laramie Game Rolls',
    }),
    new Game({
      id: 'b9a2ee6f-c4a1-46b5-b4f6-78794fb472c6',
      name: 'Zinka Weirna',
      description: 'Monk/Cleric Build',
    }),
  ];
};
