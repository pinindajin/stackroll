import { GameService } from './game.service';
import { MockGameStore, getMockGames } from '../test/gameTestUtils';
import { Test } from '@nestjs/testing';
import each from 'jest-each';
import { StoreFindResponse } from '../../../common/models/storeFindResponse.model';
import { GetGamesRequest } from '../models/dtos/getGame.dto';
import { Game } from '../models/domain/game.model';
import { ServiceFindResponse } from '../../../common/models/serviceFindResponse.model';
import 'jest';

describe('GameService', () => {
  let gameService: GameService;
  let mockGameStore: MockGameStore;
  const mockGames = getMockGames();
  const appDomain = process.env.APP_DOMAIN;
  const appPort = process.env.APP_PORT;
  const gameEndpoint = process.env.GAME_ENDPOINT;

  beforeAll(async () => {
    const mockGameStoreProvider = {
      provide: 'GameStore',
      useClass: MockGameStore,
    };

    const app = await Test.createTestingModule({
      providers: [GameService, mockGameStoreProvider],
    }).compile();

    gameService = app.get<GameService>(GameService);
    mockGameStore = app.get<MockGameStore>('GameStore');
  });

  describe('find', async () => {
    const testCases = [
      [
        new GetGamesRequest({
          pageSize: 10,
          pageOffset: 10,
        }),
        new StoreFindResponse<Game>({
          pageSize: 10,
          pageNumber: 11,
          values: mockGames.slice(100, 110),
          unfetchedIds: [],
          moreRecords: true,
          totalRecords: 10,
        }),
        new ServiceFindResponse<Game>({
          pageSize: 10,
          pageNumber: 11,
          values: mockGames.slice(100, 110),
          unfetchedIds: [],
          moreRecords: true,
          totalRecords: 10,
        }),
      ],
    ];

    each(testCases).it('should page correctly', async (
      request: GetGamesRequest,
      mockResponse: StoreFindResponse<Game>,
      expected: ServiceFindResponse<Game>,
    ) => {
      // arrange
      jest
      .spyOn(mockGameStore, 'find')
      .mockImplementation(() => mockResponse);

      // act
      const result = await gameService.find(request);

      // assert
      expect(result).toEqual(expected);
    });
  });

  describe('findOne', async () => {
    const testCases = [];

    each(testCases).it('should page correctly', async () => {});
  });

  describe('create', async () => {
    const testCases = [];

    each(testCases).it('should page correctly', async () => {});
  });

  describe('update', async () => {
    const testCases = [];

    each(testCases).it('should page correctly', async () => {});
  });

  describe('delete', async () => {
    const testCases = [];

    each(testCases).it('should page correctly', async () => {});
  });
});
