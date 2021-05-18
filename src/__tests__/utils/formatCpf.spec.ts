import { formatCpf } from '../../utils';

describe('formatCpf', () => {
  it('should format the cpf correctly', () => {
    const cpf = '25014966047';
    const formattedCpf = formatCpf(cpf);
    expect(cpf).not.toEqual(formattedCpf);
    expect(formattedCpf).toBe('250.149.660-47');
  });
});
