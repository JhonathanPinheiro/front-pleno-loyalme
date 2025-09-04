import { CouponResponse } from "@/entities/coupom";
import { api } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";

export async function getCoupons(): Promise<CouponResponse> {
    const response = await api.get<CouponResponse>(
        "/public/v4.2/loyalty/cuponeria/category/trend/offer/list?id=5827"
    );
    return response.data;
}

export const useCoupons = () => {
    return useQuery({
        queryKey: ["coupons"],
        queryFn: getCoupons,
    });
};