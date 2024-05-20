<template>
  <navbar_product />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import navbar_product from './components/navbar_product.vue';

//UseProduct Store
import { useProductStore } from './store/product';
const product_store = useProductStore();

//cart
import { useCartStore } from './store/cart';
const cart_store = useCartStore()

onMounted(() => product_store.fetch_product())
onMounted(() => cart_store.load_FromStoreage())

onMounted(() => { product_store.fetch_product() })
</script>

<style lang="scss" scoped></style>