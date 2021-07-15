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
    const url = 'http://abc.com/page/?abc=12344';
    expect(pipeInstance.transform(url)).toEqual('abc.com');
  });

  it('converts null value to empty string', () => {
    expect(pipeInstance.transform(null)).toEqual('');
  });
});
