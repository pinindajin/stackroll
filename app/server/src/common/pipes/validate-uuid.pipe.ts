import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { Validator, ValidationError } from 'class-validator';

@Injectable()
export class ValidateUUIDPipe implements PipeTransform<string, string> {
  readonly validator: Validator;

  constructor() {
    this.validator = new Validator();
  }

  transform(value: string, metadata: ArgumentMetadata): string {
    const x = console.log;
    x(`${value}`);

    if (!this.validator.isUUID(value, '4'))
      throw new BadRequestException('Id must be a version 4 UUID');

    return value;
  }
}
