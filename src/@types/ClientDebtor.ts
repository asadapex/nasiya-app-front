export interface ClientDebtor {
  id: string;
  name: string;
  address: string;
  sellerId: string;
  info: string;
  createdAt: string;
  updatedAt: string;
  PhoneNumberDebters: Array<{
    id: string;
    phone_number: string;
  }>;
  totalDebt: number;
}
