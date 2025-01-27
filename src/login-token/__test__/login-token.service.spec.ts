import { Test, TestingModule } from '@nestjs/testing';
import { LoginTokenService } from '../login-token.service';

describe('LoginTokenService', () => {
  let service: LoginTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginTokenService],
    }).compile();

    service = module.get<LoginTokenService>(LoginTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
