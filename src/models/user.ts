export interface User {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  cpf: string;
  created_at: string;
  updated_at: string;
  phoneFormatted?: string;
  cpfFormatted?: string;
  created_atFormatted?: string;
  updated_atFormatted?: string;
}
