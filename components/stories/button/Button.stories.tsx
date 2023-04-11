import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Base-Project/Button/Basic',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    secondary: true,
    label: 'Button',
  },
};

export const Terciary = {
  args: {
    terciary: true,
    label: 'Button',
  },
};

 export const Plus = {
  args: {
    plus: true,
    label: 'Button',
  },
};

