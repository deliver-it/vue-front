<template>
  <div class="relative ">
    <button @click="show = !show" :class="classes" :size="size">
      <span
      
      :class="{
        ' text-neutral-300 font-light': selectedOption === 'Selecione',
        'text-red-500': classes['storybook-select--invalid'],
        'storybook-select--span--small': classes['storybook-select--small'],
        'storybook-select--span--medium': classes['storybook-select--medium'],
        'storybook-select--span--large': classes['storybook-select--large'],
        'storybook-select--span-super-small': classes['storybook-select--super-small'],
        'text-transparent': selectedOption === 'Selecione'&&classes['storybook-select--super-small'],
        
      }">{{ selectedOption }}</span>
      <img class="w-3 " src="../../../assets/icons/down.svg" />
    </button>

    <div v-show="show" class="absolute z-50 py-2 mt-2 bg-white border rounded-md shadow-l">

      <option v-for="(option, index) in options" :key="index" :to="option"
        class="px-4 py-2 pt-2 text-sm text-color-primary hover:bg-gray-100 whitespace-nowrap"
        :class="{ 'font-bold': selectedOption === option,'p-0':classes['storybook-select--super-small'] }" @click="selectOption(option)">
        {{ option }}
      </option>
    </div>

    <label
      :class="{ 'label-select--valid': !classes['storybook-select--invalid'], 'label-select--invalid': classes['storybook-select--invalid']}">
      {{ label  }}
      <label :class="{ 'attentionPoint': !classes['storybook-select--disabled'], 'text-white': classes['storybook-select--super-small']}">*</label>
    </label>
  </div>
</template>



<script setup lang="ts">
import './select.css';
import { computed, ref } from 'vue';

const props = defineProps<Props>();
const options = props.options ?? ['Selecione a opção 1', 'Opção 2', 'Opção 3'];

interface Props {
  label: string;
  valid?: boolean;
  invalid?: boolean;
  default?: boolean;
  size?: 'small' | 'medium' | 'large' | 'super-small';
  options: string[];

}

const classes = computed(() => ({
  'storybook-select--default': props.default,
  'storybook-select--valid': props.valid,
  'storybook-select--invalid': props.invalid,
  [`storybook-select--${props.size || 'medium'}`]: true,
}));


const show = ref(false);
const selectedOption = ref('Selecione');
const toggleNav = () => {
  show.value = !show.value;
};

const selectOption = (option: string) => {
  selectedOption.value = option;
  toggleNav();
};

</script>
  