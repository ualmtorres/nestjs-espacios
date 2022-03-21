import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SolicitudModule } from '../src/solicitud/solicitud.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Solicitud } from '../src/solicitud/entities/solicitud.entity';
import { AuthGuard } from '@nestjs/passport';
import { SolicitudRepositoryMock } from '../src/solicitud/solicitud-repository-mock';

describe('SolicitudController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SolicitudModule],
    })
      .overrideGuard(AuthGuard('jwt'))
      .useValue('')
      .overrideProvider(getRepositoryToken(Solicitud))
      .useClass(SolicitudRepositoryMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/solicitud (GET)', async () => {
    return request(app.getHttpServer()).get('/solicitud').expect(200);
  });

  it('/solicitud/1 (GET)', async () => {
    return request(app.getHttpServer()).get('/solicitud/1').expect(200);
  });

  it('/solicitud (POST)', async () => {
    return request(app.getHttpServer()).post('/solicitud').expect(201);
  });

  it('/solicitud/1 (PATCH)', async () => {
    return request(app.getHttpServer()).patch('/solicitud/1').expect(200);
  });

  it('/solicitud/1 (DELETE)', async () => {
    return request(app.getHttpServer()).delete('/solicitud/1').expect(200);
  });
});
