import {
  Get,
  Controller,
  Post,
  Delete,
  Param,
  Body,
  Query,
  ValidationPipe,
  Inject,
  Put,
} from '@nestjs/common';
import {
  GetGamesRequest,
  GetGamesResponse,
  CreateGamesRequest,
  UpdateGamesRequest,
  DeleteGamesRequest,
  UpdateGamesResponse,
  DeleteGamesResponse,
} from '../models/dtos';
import { ValidateUUIDPipe } from '../../../common/pipes/validate-uuid.pipe';
import { IGameService } from '../interfaces';
import { GetGameResponse } from '../models/dtos/getGame.dto';
import { CreateGamesResponse } from '../models/dtos/createGame.dto';

// dev
const x = console.log;

@Controller('api/game')
export class GameController {
  constructor(@Inject('GameService') private readonly service: IGameService) {}

  @Get()
  async find(
    @Query(new ValidationPipe({ transform: true }))
    request: GetGamesRequest,
  ): Promise<GetGamesResponse> {
    const serviceResponse = await this.service.find(request);

    return new GetGamesResponse({
      games: serviceResponse.values,
      pageNumber: serviceResponse.pageNumber,
      pageSize: serviceResponse.pageSize,
      nextPageLink:
        serviceResponse.moreRecords === true
          ? this.buildNextPageLink(
              serviceResponse.pageSize,
              serviceResponse.pageNumber,
              serviceResponse.unfetchedIds,
            )
          : null,
    });
  }

  @Get(':id')
  async findOne(
    @Param('id', new ValidateUUIDPipe())
    id: string,
  ): Promise<GetGameResponse> {
    return this.service.findOne(id);
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    request: CreateGamesRequest,
  ): Promise<CreateGamesResponse> {
    return this.service.create(request);
  }

  @Put()
  async update(
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    request: UpdateGamesRequest,
  ): Promise<UpdateGamesResponse> {
    return this.service.update(request);
  }

  @Delete()
  async delete(
    @Body(new ValidationPipe({ transform: true }))
    request: DeleteGamesRequest,
  ): Promise<DeleteGamesResponse> {
    return this.service.delete(request);
  }

  private buildNextPageLink(
    pageSize: number,
    pageNumber: number,
    ids: Array<string>,
  ): string {
    // let nextPageLink = `api/game
    //     ?pageSize=${serviceResponse.pageSize}
    //     &pageOffset=${serviceResponse.pageSize * serviceResponse.pageNumber +
    //       1}`;
    //   if (
    //     serviceResponse.unfetchedIds &&
    //     serviceResponse.unfetchedIds.length > 0
    //   ) {
    //     // TODO: generate query string for unfetched ids
    //     nextPageLink += ``;
    //   }
    // TODO build next page link string.
    return ``;
  }
}
