import { Test } from '@nestjs/testing';
import { GameController } from '../controllers/game.controller';
import 'jest';
import each from 'jest-each';
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
import { IGameService } from '../interfaces/IGameService.interface';
import { ServiceFindResponse } from '../../../common/models/serviceFindResponse.model';
import { DeleteGamesResponse } from '../models/dtos/deleteGameDto.dto';
import { MockGameService, getMockGames } from './gameTestUtils';

const l = console.log;

describe('GameController', () => {
  let gameController: GameController;
  let mockGameService: MockGameService;
  const mockGames = getMockGames();

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
    const testCases = [
      [
        new GetGamesRequest({
          pageOffset: 0,
          pageSize: 5,
        }),
        new ServiceFindResponse<Game>({
          pageSize: 5,
          pageNumber: 1,
          values: mockGames.slice(0, 5),
          moreRecords: true,
        }),
        new GetGamesResponse({
          pageSize: 5,
          pageNumber: 1,
          numberOfRecords: 5,
          nextPageLink: 'api/game?pageSize=5&pageOffset=5',
          games: mockGames.slice(0, 5),
        }),
      ],
      [
        new GetGamesRequest({
          pageOffset: 5,
          pageSize: 5,
        }),
        new ServiceFindResponse<Game>({
          pageSize: 5,
          pageNumber: 2,
          values: mockGames.slice(5, 10),
          moreRecords: true,
        }),
        new GetGamesResponse({
          pageSize: 5,
          pageNumber: 2,
          numberOfRecords: 5,
          nextPageLink: 'api/game?pageSize=5&pageOffset=10',
          games: mockGames.slice(5, 10),
        }),
      ],
      [
        new GetGamesRequest({
          pageOffset: 15,
          pageSize: 5,
        }),
        new ServiceFindResponse<Game>({
          pageSize: 5,
          pageNumber: 4,
          values: mockGames.slice(15),
          moreRecords: false,
        }),
        new GetGamesResponse({
          pageSize: 5,
          pageNumber: 4,
          numberOfRecords: 1,
          nextPageLink: null,
          games: mockGames.slice(15),
        }),
      ],
    ];

    each(testCases).it(
      'should page correctly',
      async (
        request: GetGamesRequest,
        mockResponse: ServiceFindResponse<Game>,
        expected: GetGamesResponse,
      ) => {
        // arrange
        jest
          .spyOn(mockGameService, 'find')
          .mockImplementation(() => mockResponse);

        // act
        const result = await gameController.find(request);

        // assert
        expect(result).toEqual(expected);
      },
    );
  });

  describe('findOne', async () => {
    const testCases = [
      [
        '04c4e4c1-d003-443f-884e-9edf083498e9',
        null,
        new GetGameResponse({
          game: null,
        }),
      ],
      [
        '11a02ddc-0653-459d-a423-9e3dd70c7ff6',
        new Game({
          id: '11a02ddc-0653-459d-a423-9e3dd70c7ff6',
          name: 'Poppy',
          description: 'LoL RPG',
        }),
        new GetGameResponse({
          game: new Game({
            id: '11a02ddc-0653-459d-a423-9e3dd70c7ff6',
            name: 'Poppy',
            description: 'LoL RPG',
          }),
        }),
      ],
      [
        'b9a2ee6f-c4a1-46b5-b4f6-78794fb472c6',
        new Game({
          id: 'b9a2ee6f-c4a1-46b5-b4f6-78794fb472c6',
          name: 'Zinka Weirna',
          description: 'Monk/Cleric Build',
        }),
        new GetGameResponse({
          game: new Game({
            id: 'b9a2ee6f-c4a1-46b5-b4f6-78794fb472c6',
            name: 'Zinka Weirna',
            description: 'Monk/Cleric Build',
          }),
        }),
      ],
    ];

    each(testCases).it(
      'should page correctly',
      async (
        id: string,
        mockResponse: Game,
        expected: GetGameResponse,
      ) => {
        // arrange
        jest
          .spyOn(mockGameService, 'findOne')
          .mockImplementation(() => mockResponse);

        // act
        const result = await gameController.findOne(id);

        // assert
        expect(result).toEqual(expected);
      },
    );
  });
});
