// 예제 제품 구매시 할인 정책
public class Order {

    private final String itemName;
    private final int itemPrice;
    private final int discountPrice;

    public Order(String itemName, int itemPrice, int discountPrice) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.discountPrice = discountPrice;
    }

    public int getDiscountPrice() {
        return discountPrice;
    }
}

// public interface OrderService {

//     Order createOrder(int age, String itemName, int itemPrice);
// }

// public class OrderServiceImpl implements OrderService {

//     private final DiscountPolicy discountPolicy = new FixDiscountPolicy();

//     @Override
//     public Order createOrder(int age, String itemName, int itemPrice) {
//         int discountPrice = discountPolicy.discount(age, itemPrice);
//         return new Order(itemName, itemPrice, discountPrice);
//     }
// }

public class OrderServiceImpl implements OrderService {

    private final DiscountPolicy discountPolicy;

    public OrderServiceImpl(DiscountPolicy discountPolicy) {
        this.discountPolicy = discountPolicy;
    }

    @Override
    public Order createOrder(int age, String itemName, int itemPrice) {
        int discountPrice = discountPolicy.discount(age, itemPrice);
        return new Order(itemName, itemPrice, discountPrice);
    }
}

//실질적으로 OrdrService의 구현 객체인 OrderService에서 주문 발생
//인자로 구매자의 나이, 제품의 이름, 가격을 입력하면 Order객체 반환 
//OrderServiceImpl은 DiscountPolicy를 의존 

//DiscountPolicy 관련 객체
public interface DiscountPolicy {

    int discount(int age, int price);
}

public class FixDiscountPolicy implements DiscountPolicy {

    private static final int ADULT = 20;
    private static final int DISCOUNT_FIX_AMOUNT = 1000;

    @Override
    public int discount(int age, int price) {
        if (age < ADULT) {
            return DISCOUNT_FIX_AMOUNT;
        }
        return 0;
    }
}

public class RateDiscountPolicy implements DiscountPolicy {

    private static final int ADULT = 20;
    private static final int DISCOUNT_PERCENT = 10;

    @Override
    public int discount(int age, int price) {
        if (age < ADULT) {
            return price * DISCOUNT_PERCENT / 100;
        }
        return 0;
    }
}

//main
// public class Main {

//     public static void main(String[] args) {
//         final OrderService orderService = new OrderServiceImpl();
//         final Order order = orderService.createOrder(10, "샤프", 3000);
//         System.out.println(order.getDiscountPrice());
//     }
// }

public class AppConfig {

    public OrderService orderService() {
        return new OrderServiceImpl(discountPolicy());
    }

    public FixDiscountPolicy discountPolicy() {
        return new FixDiscountPolicy();
    }
}
//AppConfig는 프로그램 전반적으로 사용될 객체를 미리 정의해 둡니다. 
//그리고 사용자 입장에서는 무슨 할인 정책을 쓸지 선택할 필요가 없습니다. 
//단순히 AppConfig로부터 제공받는 객체를 사용할 뿐이죠. 
//만약, 할인 정책이 바뀐다면 AppConfig에서 FixDiscountPolicy를 RateDiscountPolicy로만 바꾸면 됩니다.

public class Main {

    public static void main(String[] args) {
        final AppConfig appConfig = new AppConfig();
        final OrderService orderService = appConfig.orderService();
        final Order order = orderService.createOrder(10, "샤프", 3000);
        System.out.println(order.getDiscountPrice());
    }
}
