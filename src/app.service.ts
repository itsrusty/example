import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    public data = 'okay puto',
    public gafete = 'gafete desbloqueado',
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDataInfor() {
    return this.gafete;
  }
}
