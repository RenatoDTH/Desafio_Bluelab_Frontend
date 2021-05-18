import { formatDate } from '../../utils';

describe('formatCpf', () => {
  it('should format the cpf correctly', () => {
    const date = '2021-05-17T21:08:02.000Z';
    const formattedDate = formatDate(date);
    expect(date).not.toEqual(formattedDate);
    expect(formattedDate).toBe('17/05/2021');
  });
});
