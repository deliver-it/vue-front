<template>
  <div class="relative ">
    <button @click="show = !show" class="flex items-center bg-transparent rounded-md text-color-primary">
      <span class="mr-2 font-bold text-mov-body-lg">{{ selectedOption }}</span>
      <img src="../../../assets/icons/down.svg" />
    </button>

    <div v-show="show" class="absolute z-50 py-2 mt-2 bg-white border rounded-md shadow-lg w-80">
      <option v-for="(option, index) in options" :key="index" :to="option === 'Todos os Grupos' ? '/' : '/'"
        class="block px-4 py-2 text-sm text-color-primary hover:bg-gray-100"
        :class="{ 'font-bold': selectedOption === option }" @click="selectOption(option)">
        {{ option }}
      </option>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const show = ref(false);
const selectedOption = ref('Selecione');
const options = ['Opção A', 'Opção B'];

const toggleNav = () => {
  show.value = !show.value;
};

const selectOption = (option: string) => {
  selectedOption.value = option;
  toggleNav();
};

</script>
