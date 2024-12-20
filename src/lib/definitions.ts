export type Invoice = {
    id: number;
    customer_id: string;
    amount: number;
    date: string;
    status: 'pending' | 'paid';
  };