import { formatPhone } from '../../utils';

describe('formatCpf', () => {
  it('should format the cpf correctly', () => {
    const phone = '1130222530';
    const formattedPhone = formatPhone(phone);
    expect(phone).not.toEqual(formattedPhone);
    expect(formattedPhone).toBe('(11) 30222-530');
  });
});
