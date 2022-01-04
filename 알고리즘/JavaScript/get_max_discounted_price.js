const shop_prices = [30000, 2000, 1500000];
const user_coupons = [20, 40];

function get_max_discounted_price(prices, coupons) {
  prices.sort((a, b) => b - a);
  coupons.sort((a, b) => b - a);
  console.log(prices, coupons);

  let price_index = 0;
  let coupon_index = 0;
  let max_discounted_price = 0;

  while (price_index < prices.length && coupon_index < coupons.length) {
    max_discounted_price += (prices[price_index] * (100 - coupons[coupon_index])) / 100;
    price_index++;
    coupon_index++;
  }
  while (price_index < prices.length) {
    max_discounted_price += prices[price_index];
    price_index++;
  }
  return max_discounted_price;
}

console.log(get_max_discounted_price(shop_prices, user_coupons));
