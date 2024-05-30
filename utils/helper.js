export const getDiscountedPricePersentage = (price, origin_price)=>{
const discount = origin_price - price
const discountPersentage = (discount/origin_price)*100
return discountPersentage
}