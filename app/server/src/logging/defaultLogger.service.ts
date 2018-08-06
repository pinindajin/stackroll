import { LoggerService } from '@nestjs/common';

export class DefaultLogger implements LoggerService {
  log(message: string) {
    process.stdout.write(`@Info: ${message}`);
  }
  error(message: string, trace: string) {
    process.stdout.write(`@Error: ${message}`);
  }
  warn(message: string) {
    process.stdout.write(`@Warn: ${message}`);
  }
}