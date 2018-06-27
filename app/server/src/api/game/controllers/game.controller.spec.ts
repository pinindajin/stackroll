import { Test } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from '../services/game.service';
import 'jest';
import { GetGamesRequest, GetGamesResponse } from '../models/dtos';
import { Game } from '../models/domain';

describe('GameController', () => {
  let gameController: GameController;
  let gameService: GameService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [GameController],
      providers: [GameService],
    }).compile();

    gameController = app.get<GameController>(GameController);
    gameService = app.get<GameService>(GameService);
  });

  describe('find', async () => {
    it('should return an array of games', async () => {
      // arrange
      const games = [
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
      ];
      const expected = new GetGamesResponse({
        pageSize: 5,
        pageNumber: 1,
        nextPageLink: '',
        games,
      });
      jest.spyOn(gameService, 'find').mockImplementation(() => expected);
      const request = new GetGamesRequest({
        pageOffset: 0,
        pageSize: 5,
      });

      // act
      const result = await gameController.find(request);

      // assert
      expect(result).toBe(expected);
    });
  });
});
