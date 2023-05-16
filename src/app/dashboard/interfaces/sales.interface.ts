export interface ISale {
  id:        number;
  betNumber: string;
  amount:    number;
  prizeWon:  number;
  createdAt: string;
  updatedAt: string;
  commerce:  ICommerce;
  raffle:    IRaffle;
  stateSale: IStateSale;
}

export interface ICommerce {
  id:             number;
  name:           string;
  identification: string;
  phone:          string;
  email:          string;
  country:        string;
  status:         boolean;
  createdAt:      string;
  updatedAt:      string;
}

export interface IRaffle {
  id:          number;
  description: string;
  dateInitial: string;
  dateFinal:   string;
  createdAt:   string;
  updatedAt:   string;
}

export interface IStateSale {
  id:          number;
  description: string;
  createdAt:   string;
  updatedAt:   string;
}



export interface ISaleTable {
  id: number;
  name: string;
  betNumber: number;
  amount: number;
  prizeWon: number;
  stateSale: string;
  createdAt: string;
}
