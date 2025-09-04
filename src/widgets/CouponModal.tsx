'use client';

import { useSheet } from '@/features/hook/use-sheet';
import NiceModal from '@ebay/nice-modal-react';
import { BaseModal, Title, Action } from '@/shared/ui/BaseModal';

import Image from 'next/image';
import { Badge } from '@/shared/ui/Badge';
import { Coupon } from '@/entities/coupom';

export const CouponModal = NiceModal.create((coupon: Coupon) => {
  const { close } = useSheet();
  const { badge, discount, title, image, cashback, code, rules } = coupon;

  const isGift = badge === 'BRINDE';
  const hasDiscount = discount > 0;
  const shouldShowBadge = hasDiscount || isGift;
  const hasCashback = Boolean(cashback?.rate?.current && cashback?.rate?.current > 0);

  const getBadgeText = () => (isGift ? badge : `${badge} OFF`);

  const handleCopyAndGo = () => {
    if (!coupon.code || !coupon.partnerUrl && !coupon.url) return;

    navigator.clipboard.writeText(coupon.code);

    window.open(coupon.partnerUrl || coupon.url || '', '_blank');
  };

  return (
    <BaseModal open={true} onClose={close}>
      <div className="bg-white rounded-t-3xl p-4 pb-10 flex flex-col gap-8">
        <div>
          <Action
            onClick={close}
            className="w-full flex justify-end cursor-pointer pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                d="M14,1.4,12.6,0,7,5.6,1.4,0,0,1.4,5.6,7,0,12.6,1.4,14,7,8.4,12.6,14,14,12.6,8.4,7Z"
                fill="#313131"
              />
            </svg>
          </Action>

          <div className="flex gap-2">
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="rounded-full max-h-20 object-center"
            />
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2">
                {shouldShowBadge && <Badge>{getBadgeText()}</Badge>}
                {hasCashback && (
                  <Badge>{cashback?.rate?.current}% de cashback</Badge>
                )}
              </div>
              <p className="text-[#2E3238] text-base md:text-xl font-normal">
                {title}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="bg-[#F72717] rounded-3xl flex p-0.5 gap-2 cursor-pointer"
        >
          <div className="bg-white p-0.5 rounded-l-3xl w-full flex justify-center items-center">
            <p className="text-[#2E3238] font-bold text-base md:text-xl">
              {code}
            </p>
          </div>
          <p
            onClick={handleCopyAndGo}
            className="text-white text-sm md:text-base font-bold w-full max-w-[92px] md:max-w-[200px] p-[3px] pr-1.5 md:p-3"
          >
            Copiar e ir para a loja
          </p>
        </button>
      </div>

      <div className="px-4 py-5 flex flex-col gap-2.5">
        <Title className="text-[#2E3238] font-bold text-sm md:text-xl">
          Regras de uso
        </Title>
        <p className="text-[#2E3238] font-normal text-sm md:text-lg">{rules}</p>
      </div>
    </BaseModal>
  );
});


