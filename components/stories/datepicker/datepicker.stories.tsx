import Datepicker from './Datepicker.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Base-Project/Input/Datepicker',
  component: Datepicker,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Default = {
  args: {
    default: true,
    label:'Date'
  },
};

export const Valid = {
  args: {
    valid: true,
    label:'Date'
  },
};

export const Invalid = {
  args: {
    invalid: true,
    label:'Date'
  },
};
