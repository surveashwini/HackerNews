import { DateAgoPipe } from './date-ago.pipe';

function getDiffDays(timestamp: number) {
  const firstDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate()
  );

  const nextDate = new Date(timestamp);
  const secondDate = new Date(
    nextDate.getFullYear(),
    nextDate.getMonth() + 1,
    nextDate.getDate()
  );
  const diffDays = Math.round(
    Math.abs(
      (firstDate.getTime() - secondDate.getTime()) / (24 * 60 * 60 * 1000)
    )
  );
  return diffDays;
}

describe('DateAgoPipe', () => {
  let pipeInstance: DateAgoPipe;
  beforeEach(async () => {
    pipeInstance = new DateAgoPipe();
  });

  it('create an instance', () => {
    expect(pipeInstance).toBeTruthy();
  });

  it('converts the timestamp to days ago format', () => {
    let diffDays = getDiffDays(1626090191);
    expect(pipeInstance.transform(1626090191)).toEqual(`${diffDays} days ago`);
  });

  it('converts the timestamp to days ago format', () => {
    let diffDays = getDiffDays(1562265000000);
    expect(pipeInstance.transform(1562265000000)).toEqual(
      `${diffDays} days ago`
    );
  });
});
