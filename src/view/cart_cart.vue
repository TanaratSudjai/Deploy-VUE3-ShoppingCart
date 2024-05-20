<template>
    <h1>ตะกร้าสินค้า</h1>

    <table class="table">
        <thead>
            <tr>
                <th>สินค้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>รวม</th>
                <th>ลบสินค้า</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cart, index) in carts" :key="index">
                <td>
                    <img :src="cart.product.image" alt="" class="img-thumbnail" width="100">{{ cart.product.title }}
                </td>
                <td>{{ cart.product.price }}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" @click="cart_store.decrement_quntity(index)">-</button>
                    <span class="mx-2">{{ cart.quantity }}</span>
                    <button class="btn btn-sm btn-secondary" @click="cart_store.increment_quantity(index)">+</button>
                </td>
                <td>{{ currencyTHB(cart.total_priceByProduct) }} บาท</td>
                <td>
                    <button class="btn btn-danger" @click="cart_store.remove_cart(index)">ลบ</button>
                </td>
            </tr>
            <br>
            <button class="btn btn-primary" @click="cart_store.clear_cart()">เคลียร์ตะกร้า</button>
            <button class="btn btn-success mx-2">ยอดรวม: {{ currencyTHB(cart_store.total) }} บาท</button>
        </tbody>
    </table>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../store/cart';
import { currencyTHB } from '../shared/currency';

const cart_store = useCartStore()
const carts = computed(() => { return cart_store.cart_previews })

</script>

<style lang="scss" scoped></style>