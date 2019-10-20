import { Rectangle } from '../main/components/Rectangle';

describe('Rectangle 10 by 10', () => {

  it('computes area', () => {
    expect(new Rectangle(10,10).area).toBe(100);
  });
});