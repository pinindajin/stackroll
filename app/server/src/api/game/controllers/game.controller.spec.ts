import { Test } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from '../services/game.service';
import 'jest';
import {
  GetGamesRequest,
  GetGamesResponse,
  CreateGamesRequest,
  CreateGamesResponse,
  UpdateGamesRequest,
  UpdateGamesResponse,
  DeleteGamesRequest,
  GetGameResponse,
} from '../models/dtos';
import { Game } from '../models/domain';
import { GameStore } from '../stores/game.store';
import { IGameService } from '../interfaces/gameService.interface';
import { ServiceFindResponse } from '../../../common/models/serviceFindResponse.model';
import { DeleteGamesResponse } from '../models/dtos/deleteGameDto.dto';

const l = console.log;

describe('GameController', () => {
  let gameController: GameController;
  let mockGameService: MockGameService;

  beforeAll(async () => {
    const mockGameServiceProvider = {
      provide: 'GameService',
      useClass: MockGameService,
    };

    const app = await Test.createTestingModule({
      controllers: [GameController],
      providers: [mockGameServiceProvider],
    }).compile();

    gameController = app.get<GameController>(GameController);
    mockGameService = app.get<MockGameService>('GameService');
  });

  describe('find', async () => {
    it('should return an array of games', async () => {
      // arrange
      const games = getMockGames();
      const expected = new GetGamesResponse({
        pageSize: 25,
        pageNumber: 1,
        nextPageLink: null,
        games,
      });
      jest.spyOn(mockGameService, 'find').mockImplementation(
        () =>
          new ServiceFindResponse<Game>({
            pageSize: 25,
            pageNumber: 1,
            values: games,
            moreRecords: false,
          }),
      );
      const request = new GetGamesRequest({
        pageOffset: 0,
        pageSize: 25,
      });

      // act
      const result = await gameController.find(request);
      l(`::: ${JSON.stringify(result)}`);

      // assert
      expect(result).toEqual(expected);
    });
  });
});

/* MOCKS - should move elsewhere?? */
class MockGameService implements IGameService {
  async find(request: GetGamesRequest): Promise<ServiceFindResponse<Game>> {
    return new ServiceFindResponse();
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

const getMockGames = () => {
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
  ];
};
