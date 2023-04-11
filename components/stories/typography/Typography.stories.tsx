import Typography from './Typography.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Base-Project/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large',
      'small-headline','medium-headline','large-headline',
      'small-body','medium-body','large-body',
      'small-label','medium-label','large-label'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Display = {
  args: {
    label: 'DISPLAY',
  },
};

export const Headline = {
  args: {
    label: 'HEADLINE',
  },
};

export const Body = {
  args: {
    label: 'BODY',
  },
};

export const Label = {
    args: {
      label: 'LABEL',
    },
  };

