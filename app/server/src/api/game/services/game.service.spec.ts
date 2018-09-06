import { GameService } from './game.service';
import { MockGameStore, getMockGames } from '../test/gameTestUtils';
import { Test } from '@nestjs/testing';
import each from 'jest-each';

describe('GameService', () => {
  let gameService: GameService;
  let mockGameStore: MockGameStore;
  const mockGames = getMockGames();
  const appDomain = process.env.APP_DOMAIN;
  const appPort = process.env.APP_PORT;
  const gameEndpoint = process.env.GAME_ENDPOINT;

  beforeAll(async () => {
    const mockGameStoreProvider = {
      provide: 'GameRepository',
      useClass: MockGameStore,
    };

    const app = await Test.createTestingModule({
      providers: [GameService, mockGameStoreProvider],
    }).compile();

    gameService = app.get<GameService>(GameService);
    mockGameStore = app.get<MockGameStore>('GameRepository');
  });

  describe('find', async () => {
    const testCases = [];

    each(testCases).it('should page correctly', async () => {});
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
