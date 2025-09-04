export interface Rate {
  current: number;
  previous: number | null;
}

export interface Cashback {
  type: string;
  rate: Rate;
}

export interface Store {
  id: number;
  legacyId: number;
  slug: string;
  name: string;
  url: string;
  description: string | null;
  notice: string | null;
  rules: string[];
  logo: string;
  maxDiscount: number;
  tags: string;
  cashback: Cashback;
  partnerUrl: string;
  lastRevision: string;
}

export interface Coupon {
  id: number;
  legacyId: number;
  title: string;
  slug: string;
  image: string;
  discount: number;
  quantity: number;
  limit: number;
  rules: string;
  url: string | null;
  code: string;
  partialCode: string;
  badge: string;
  renderType: string;
  pickedCount: number;
  expired: boolean;
  expirationDate: string;
  cashback: Cashback;
  partnerUrl: string;
  addresses: any | null;
  storeId: number;
  legacyStoreId: number;
  categoryIds: number[];
  hideCodeOnLoad: boolean;
  store: Store;
}

export interface CouponResponse {
  data: Coupon[];
}
