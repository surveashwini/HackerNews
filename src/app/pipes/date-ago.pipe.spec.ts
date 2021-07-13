import { DateAgoPipe } from './date-ago.pipe';

describe('DateAgoPipe', () => {
  let pipeInstance: DateAgoPipe;
  beforeEach(async () => {
    pipeInstance = new DateAgoPipe();
  });

  it('create an instance', () => {
    expect(pipeInstance).toBeTruthy();
  });

  it('converts the timestamp to days ago format', () => {
    expect(pipeInstance.transform(1626090191)).toEqual('18801 days ago');
  });

  it('converts the timestamp to days ago format', () => {
    expect(pipeInstance.transform(1562265000000)).toEqual('738 days ago');
  });
});
