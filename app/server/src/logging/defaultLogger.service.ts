import { LoggerService } from '@nestjs/common';

export class DefaultLogger implements LoggerService {
  log(message: string) {
    process.stdout.write(`\n@Info: ${message}`);
  }
  error(message: string, trace: string) {
    process.stdout.write(`\n@Error: ${message} \n Trace... ${trace}`);
  }
  warn(message: string) {
    process.stdout.write(`\n@Warn: ${message}`);
  }
}