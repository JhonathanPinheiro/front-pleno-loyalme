import { Coupon } from "@/entities/coupom"
import NiceModal from "@ebay/nice-modal-react"

export const openCouponModal = (coupon: Coupon) => NiceModal.show('CouponModal', coupon)
