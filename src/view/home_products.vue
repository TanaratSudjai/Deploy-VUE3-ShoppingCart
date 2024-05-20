<template>

    <div class="d-flex justify-content-center mt-2" v-if="!product_store.load_product">
        <h2>กำลังโหลดข้อมูลสินค้า....</h2>
    </div>

    <div class="row" v-else>
        <div class="col mb-2 mt-2" v-for="(product, index) in search_products" :key="index">
            <div class="card" style="width: 19rem;">
                <img class="card-img-top mx-auto" :src="product.image"
                    style="width: 17rem; height: 12rem; margin-top: 1rem;" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text"> ประเภท {{ product.category }}</p>
                    <p class="card-text">ราคา {{ currencyTHB(product.price) }} </p>
                    <routerLink :to="`/productdetail/${product.id}`" class="btn btn-primary mx-2">รายละเอียด
                    </routerLink>
                    <button class="btn btn-success mx-2"
                        @click="cart_store.add_cart(product.id, product.price)">เพิ่มเข้าตะกร้า</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { computed } from 'vue';

//useProduct
import { useProductStore } from '../store/product';
const product_store = useProductStore();
import { currencyTHB } from '../shared/currency';

const list = computed(() => product_store.list_product)
const search_products = computed(() =>product_store.search_product)


import { useCartStore } from '../store/cart';

const cart_store = useCartStore()



</script>

<style lang="scss" scoped></style>