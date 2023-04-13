<script setup lang="ts">
  import './button.css';
  import { computed } from 'vue';
  
  const props = defineProps<Props>();
  

  interface Props {
  label?: string;
  primary?: boolean;
  terciary?: boolean;
  secondary?: boolean;
  plus?: boolean;
  size?: 'small' | 'medium' | 'large';
  
}


const classes = computed(() => ({
          'storybook-button--primary': props.primary,
          'storybook-button--secondary': props.secondary,
          'storybook-button--terciary': props.terciary,
          'storybook-button--plus': props.plus,
          [`storybook-button--${props.size || 'small'}`]: true,
}));

const emits = defineEmits(["click"]);

const onClick = () => {
  emits("click");
  console.log('teste');
};

  </script>

<template>
  <button type="button" :class="classes" @click="onClick"  >
    <img  v-show="classes['storybook-button--plus']" src="../../../assets/icons/plus-icon.svg" /> 
    {{ props.label }}
  </button>
  </template>
  