let shop_menus = ['만두', '떡볶이', '오뎅', '사이다', '콜라', '치킨'];
let shop_orders = ['오뎅', '치킨', '만두'];

function is_available_to_order(menus, orders) {
  let set_menus = new Set(menus);
  for (let order of orders) {
    if (!set_menus.has(order)) {
      return false;
    }
  }
  return true;
}

console.log(is_available_to_order(shop_menus, shop_orders));
