import { Controller, Get, Param } from '@nestjs/common';
import { AccessService } from './access.service';
import { Application, ApplicationResponse } from './access.type';

@Controller('application')
export class AccessController {
  constructor(private readonly applicationService: AccessService) {}

  @Get('list')
  getApplications(): ApplicationResponse {
    return this.applicationService.getApplications();
  }

  @Get(':id')
  getApplication(@Param() params): Application {
    return this.applicationService.getApplication(params.id);
  }
}
