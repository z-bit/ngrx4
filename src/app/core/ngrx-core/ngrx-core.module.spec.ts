import { NgrxCoreModule } from './ngrx-core.module';

describe('NgrxCoreModule', () => {
  let ngrxCoreModule: NgrxCoreModule;

  beforeEach(() => {
    ngrxCoreModule = new NgrxCoreModule();
  });

  it('should create an instance', () => {
    expect(ngrxCoreModule).toBeTruthy();
  });
});
