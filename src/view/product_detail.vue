<template>

    <div class="d-flex justify-content-center mt-2" v-if="!load_detail_product">
        <h2>กำลังโหลดรายละเอียดข้อมูลสินค้า....</h2>
    </div>

    <div class="row mt-3" v-else>
        <div class="col-md-6">
            <img :src="product.image" alt="" class="img-fluid">
        </div>

        <div class="col-md-6">
            <h1> {{ product.title }}</h1>
            <p>
                {{ product.description }}</p>
            <h4> ราคา
                {{ currencyTHB(product.price) }}
            </h4>

            <div class="d-flex mt-3">
                <div class="btn-group me-auto">
                    <button class="btn btn-outline-primary" @click="increment_quantity()">+</button>
                    <button class="btn btn-outline-primary">{{ quantity }}</button>
                    <button class="btn btn-outline-primary" @click="decrement_quantity()"
                        :disabled="quantity == 1">-</button>
                </div>
                <button class="btn btn-primary"
                    @click="cart_store.add_cart_detail(product.id, product.price, quantity)">เพิ่มสินค้า</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCartStore } from '../store/cart';
import { currencyTHB } from '../shared/currency';


const cart_store = useCartStore()

const product = ref({})
const route = useRoute()
const quantity = ref(1)

const increment_quantity = () => quantity.value++
const decrement_quantity = () => quantity.value--

const load_detail_product = ref(false)
const product_detail = async () => {
    await axios
        .get(`${import.meta.env.VITE_API}/${route.params.id}`)
        .then((res) => {
            product.value = res.data
            load_detail_product.value = true
        }).catch((err) => {
            console.log(err);
        })
}

onMounted(() => product_detail())


</script>

<style lang="scss" scoped></style>