import { createRouter, createWebHistory } from "vue-router";
import home_products from "../view/home_products.vue";
import product_detail from "../view/product_detail.vue";
import cart_cart from "../view/cart_cart.vue";
const routes = [
  {
    path: "/",
    name: "home_products",
    component: home_products,
  },
  {
    path: "/productdetail/:id",
    name: "product_detail",
    component: product_detail,
  },
  {
    path: "/cart",
    name: "cart_cart",
    component: cart_cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
