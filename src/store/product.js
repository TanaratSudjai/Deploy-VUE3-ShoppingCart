import { defineStore } from "pinia";

import axios from "axios";
import { ref, computed } from "vue";

export const useProductStore = defineStore("useProductStore", () => {
  const product = ref([]);
  const input = ref('')
  const list_products = computed(() => product.value);
  const load_product = computed(() => product.value.length > 0);

  const fetch_product = async () => {
    await axios
      .get(`${import.meta.env.VITE_API}`)
      .then((res) => {
        product.value = res.data;
        console.log(product.value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const search_product = computed(() => {
    if (input.value.length < 3) return product.value;

    return product.value.filter((prd) => {
      if (prd.title.toLowerCase().includes(input.value.toLowerCase()) == false) {
        return false;
      } else {
        return prd.title.toLowerCase().includes(input.value.toLowerCase());
      }
    });
  });



  return {
    product,
    fetch_product,
    list_products,
    load_product,
    input,
    search_product,
  };
});
