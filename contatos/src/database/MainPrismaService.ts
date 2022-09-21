import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as MainDB } from '@prisma/client';

@Injectable()
export class MainPrismaService extends MainDB implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
