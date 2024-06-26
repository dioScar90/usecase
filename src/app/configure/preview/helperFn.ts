import type { CaseFinish, CaseMaterial } from "@prisma/client"
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products"

export const calculateTotalPrice = (finish: CaseFinish | null, material: CaseMaterial | null) => {
  let price = BASE_PRICE
  
  if (finish === 'textured') {
    price += PRODUCT_PRICES.finish.textured
  }

  if (material === 'polycarbonate') {
    price += PRODUCT_PRICES.material.polycarbonate
  }

  return price
}