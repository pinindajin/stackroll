import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from '../services/game.service';
import 'jest';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [GameController],
      providers: [GameService],
    }).compile();
  });

  describe('root', async () => {
    it('should return "Hello World!"', async () => {
      const appController = app.get<GameController>(GameController);
      const response = await appController.findOne('');
      expect(response).toBe('TEST');
    });
  });
});
