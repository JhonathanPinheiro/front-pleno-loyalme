'use client';

import { Coupon } from '@/entities/coupom';
import { Badge } from '@/shared/ui/Badge';
import { openCouponModal } from '@/store/modals/open-modals';
import Image from 'next/image';

export const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  const { badge, discount, title, image, cashback } = coupon;

  const isGift = badge === 'BRINDE';
  const hasDiscount = discount > 0;
  const shouldShowBadge = hasDiscount || isGift;
  const hasCashback = Boolean(
    cashback?.rate?.current && cashback?.rate?.current > 0
  );

  const getBadgeText = () => (isGift ? badge : `${badge} OFF`);

  return (
    <div
      onClick={() => openCouponModal(coupon)}
      className="w-full max-w-[328px] rounded-2xl bg-white shadow-[3px_3px_10px_#0000000F] p-6 flex flex-col gap-4 cursor-pointer"
    >
      <div className="flex gap-2 items-center">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="rounded-full min-h-20 object-center"
        />
        <div className="flex flex-col gap-1">
          {shouldShowBadge && <Badge>{getBadgeText()}</Badge>}
          {hasCashback && <Badge>{cashback?.rate?.current}% de cashback</Badge>}
        </div>
      </div>

      <hr className="border-t-2 md:border border-dashed border-[#EFEFEF] w-full" />
      <p className="text-[#2E3238] text-base font-normal">{title}</p>
    </div>
  );
};
