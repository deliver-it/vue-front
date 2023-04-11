
<template>
  <div class="relative ">
    <input type="input" id="search" :class="classes" placeholder="Buscar">
    <button type="submit" :class="{
      'storybook-select--button-small': classes['storybook-search--small'],
      'storybook-select--button-medium': classes['storybook-search--medium'],
      'storybook-select--button-large': classes['storybook-search--large'],
    }">
      <svg aria-hidden="true" class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <span class="sr-only">Search</span>
    </button>
  </div>
</template>



<script setup lang="ts">
import './search.css';
import { computed } from 'vue';

const props = defineProps<Props>();
const inputValue = "";
let isTyping = false;

const emits = defineEmits(["changeInput"]);
const onChange = () => {
  emits("changeInput", inputValue);

  isTyping = true;
};


interface Props {
  default?: boolean;
  size?: 'small' | 'medium' | 'large';

}

const classes = computed(() => ({
  'storybook-search--default': props.default,
  [`storybook-search--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({

}));
</script>
