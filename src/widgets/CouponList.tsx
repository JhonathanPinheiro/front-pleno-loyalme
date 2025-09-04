'use client'
import { useCoupons } from "@/features/coupon/useCoupons";
import { CouponCard } from "./CouponCard";

export const CouponList = () => {
    const { data } = useCoupons();

    const filteredCoupons = data?.data?.filter(
        (coupon) => coupon.renderType === 'COUPON_ONLINE'
    );

    return (
        <div className="flex flex-wrap items-center justify-center px-4 py-6 gap-4">
            {filteredCoupons?.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
            ))}
        </div>
    );
};
