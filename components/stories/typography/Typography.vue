
<script setup lang="ts">
import './typography.css';
import {  computed } from 'vue';
const props = defineProps<Props>();

interface Props {
  label: string;
  size?: 'small' | 'medium' | 'large' | 'small-headline' | 'medium-headline' | 'large-headline' | 'small-body' | 'medium-body' | 'large-body' | 'small-label' | 'medium-label' | 'large-label';
  color?: string;
}

const classes = computed(() => ({

  [`storybook-typography--${props.size }`]: true,
}));

</script>
<template>
  <label :class="classes" >{{ label }}</label>
</template>
