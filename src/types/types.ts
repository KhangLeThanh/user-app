export type UserDetail = Readonly<{
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  birthDate: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
  };
}>;

export type Cart = Readonly<{
  userId: number;
  total: string;
  totalProducts: string;
  totalQuantity: string;
}>;

