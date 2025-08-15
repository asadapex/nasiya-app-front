import type { DebtType } from "./Debt";
import type { DebtorType } from "./Debtor";

export interface SellerType {
  id: string;
  name: string;
  img?:string;
  balance: number;
  login: string;
  createdAt: string;
  updatedAt: string;
  Debt: Array<DebtType>;
  Debtor: Array<DebtorType>;
  creditSum: number;
  debtorCount: number;
  overdueDebts: number;
}
