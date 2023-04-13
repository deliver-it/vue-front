
<template>
  <div class="relative group ">
    <input required v-model="inputValue" @input="onChange" :class="classes" :style="style" placeholder=" " />

   <label :class="{'label-input--valid': !classes['storybook-input--invalid'], 'label-input--invalid': classes['storybook-input--invalid']}">
  

      {{ label??'Label' }}
      
      
            
    </label>
  </div>
</template>



<script setup lang="ts">
import './input.css';
import {  ref, computed } from 'vue';
  
const props = defineProps<Props>();
const inputValue = "";
let isTyping = false;
let borderStyle = ref('');

const emits = defineEmits(["changeInput"]);
const onChange = () => {
  emits("changeInput", inputValue);
  
  isTyping = true;
};

  interface Props {
  label: string;
  type: string;
  valid?: boolean;
  invalid?: boolean;
  default?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}

const classes = computed(() => ({
  'storybook-input--default': props.default,
  'storybook-input--valid': props.valid,
  'storybook-input--invalid': props.invalid,
  [`storybook-input--${props.size || 'medium'}`]: true,
}));

if (!inputValue) {
  borderStyle.value = 'label-input--valid';
} else if (isTyping) {
  borderStyle.value = 'label-input--invalid';
} else {
  borderStyle.value = 'label-input--default';
}

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
  border: borderStyle.value,
}));
</script>
