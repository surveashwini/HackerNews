import { FormatUrlPipe } from './format-url.pipe';

describe('FormatUrlPipe', () => {
  let pipeInstance: FormatUrlPipe;
  beforeEach(async () => {
    pipeInstance = new FormatUrlPipe();
  });

  it('create an instance', () => {
    expect(pipeInstance).toBeTruthy();
  });

  it('converts the entire url to only domain', () => {
    expect(pipeInstance.transform('http://abc.com/page/?abc=12344')).toEqual(
      'abc.com'
    );
  });
});
