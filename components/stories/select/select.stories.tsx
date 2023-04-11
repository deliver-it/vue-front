import Select from './Select.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Base-Project/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large','super-small'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Default = {
  args: {
    default: true,
    placeholder: 'Input',
  },
};

export const Valid = {
  args: {
    valid: true,
    placeholder: 'Input',
  },
};

export const Invalid = {
  args: {
    invalid: true,
    placeholder: 'Input',
  },
};

