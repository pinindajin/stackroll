import { Test } from '@nestjs/testing';
import { GameController } from './game.controller';
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
  GameToCreate,
  GameToUpdate,
} from '../models/dtos';
import { Game } from '../models/domain';
import { ServiceFindResponse } from '../../../common/models/serviceFindResponse.model';
import { DeleteGamesResponse } from '../models/dtos/deleteGameDto.dto';
import { MockGameService, getMockGames } from '../test/gameTestUtils';
import { Hyperlink } from '../../../common/models/hyperlink.model';
import { HTTPVERB } from '../../../common/models/httpVerb.type';
import { ServiceModifyResponse } from '../../../common/models/serviceModifyResponse.model';
import * as dotenv from 'dotenv';
import { AppConfigService } from '../../../config.service';
dotenv.config();

const l = console.log;

describe('GameController', () => {
  let gameController: GameController;
  let mockGameService: MockGameService;
  const mockGames = getMockGames();
  const appDomain = process.env.APP_DOMAIN;
  const appPort = process.env.APP_PORT;
  const gameEndpoint = process.env.GAME_ENDPOINT;

  beforeAll(async () => {
    const mockGameServiceProvider = {
      provide: 'GameService',
      useClass: MockGameService,
    };

    const configServiceProvider = {
      provide: 'AppConfigService',
      useClass: AppConfigService,
    };

    const app = await Test.createTestingModule({
      controllers: [GameController],
      providers: [mockGameServiceProvider, configServiceProvider],
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
      'should return correct records',
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

  describe('create', async () => {
    const testCases = [
      [
        new CreateGamesRequest({
          gamesToCreate: [
            new GameToCreate({
              name: 'FIRST GAME TO CREATE',
              description: 'firstman',
            }),
            new GameToCreate({
              name: 'some other game',
              description: 'things',
            }),
            new GameToCreate({
              name: 'testing testy 3rd',
              description: '3333333',
            }),
          ],
        }),
        new ServiceModifyResponse({
          ids: [
            '1d967746-1134-4e91-a132-abb0df58df7b',
            '236850f9-e404-4117-b2c3-5a0f2d60256a',
            '69d39b9c-07a7-4a6e-8e08-41b57b880359',
          ],
        }),
        new CreateGamesResponse({
          ids: [
            '1d967746-1134-4e91-a132-abb0df58df7b',
            '236850f9-e404-4117-b2c3-5a0f2d60256a',
            '69d39b9c-07a7-4a6e-8e08-41b57b880359',
          ],
          links: [
            new Hyperlink({
              href: `${appDomain}:${appPort}/api/${gameEndpoint}`,
              rel: 'self',
              type: HTTPVERB.GET,
            }),
          ],
        }),
      ],
      [
        new CreateGamesRequest({
          gamesToCreate: [
            new GameToCreate({
              name: 'SINGLE game to CREATE',
              description: 'only1',
            }),
          ],
        }),
        new ServiceModifyResponse({
          ids: [
            'e94a0494-c649-4e37-a5eb-879d9923e183',
          ],
        }),
        new CreateGamesResponse({
          ids: [
            'e94a0494-c649-4e37-a5eb-879d9923e183',
          ],
          links: [
            new Hyperlink({
              href: `${appDomain}:${appPort}/api/${gameEndpoint}`,
              rel: 'self',
              type: HTTPVERB.GET,
            }),
          ],
        }),
      ],
    ];

    each(testCases).it(
      'should create records',
      async (
        request: CreateGamesRequest,
        mockResponse: ServiceModifyResponse,
        expected: CreateGamesResponse,
      ) => {
        // arrange
        jest
          .spyOn(mockGameService, 'create')
          .mockImplementation(() => mockResponse);

        // act
        const result = await gameController.create(request);

        // assert
        expect(result).toEqual(expected);
      },
    );
  });

  describe('update', async () => {
    const testCases = [
      [
        new UpdateGamesRequest({
          gamesToUpdate: [
            new GameToUpdate({
              id: 'fc51d387-f4dc-46b1-bf28-3f71907f2686',
              name: 'NEW NAME',
            }),
            new GameToUpdate({
              id: '892a6aca-b60f-47f5-9599-b32ad315bd7c',
              description: 'new descript.',
            }),
            new GameToUpdate({
              id: '7ba3015a-524a-4d8e-b585-3247f76a3d01',
              name: 'newest name',
              description: 'newesterest description',
            }),
          ],
        }),
        new ServiceModifyResponse({
          ids: [
            'fc51d387-f4dc-46b1-bf28-3f71907f2686',
            '892a6aca-b60f-47f5-9599-b32ad315bd7c',
            '7ba3015a-524a-4d8e-b585-3247f76a3d01',
          ],
        }),
        new UpdateGamesResponse({
          ids: [
            'fc51d387-f4dc-46b1-bf28-3f71907f2686',
            '892a6aca-b60f-47f5-9599-b32ad315bd7c',
            '7ba3015a-524a-4d8e-b585-3247f76a3d01',
          ],
          links: [
            new Hyperlink({
              href: `${appDomain}:${appPort}/api/${gameEndpoint}`,
              rel: 'self',
              type: HTTPVERB.GET,
            }),
          ],
        }),
      ],
    ];

    each(testCases).it(
      'should update records',
      async (
        request: UpdateGamesRequest,
        mockResponse: ServiceModifyResponse,
        expected: UpdateGamesResponse,
      ) => {
        // arrange
        jest
        .spyOn(mockGameService, 'update')
        .mockImplementation(() => mockResponse);

        // act
        const result = await gameController.update(request);

        // assert
        expect(result).toEqual(expected);
    });
  });
});
