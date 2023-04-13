import { within } from '@storybook/testing-library';
import userEvent from '@testing-library/user-event';
import MyPage from './Page.vue';
import { Component } from '@vue/runtime-core';

interface LoginParams {
  Element: HTMLElement;
}

interface Login {
  render: () => {
    components: {
      MyPage: Component;
    };
    template: string;
  };
  play: ({ Element }: LoginParams) => Promise<void>;
}

const Login: Login = {
  render: () => ({
    components: {
      MyPage,
    },
    template: '<my-page />',
  }),
  play: async ({ Element }) => {
    const canvas = within(Element);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};

export default {
  title: 'Movimentacao/Page',
  component: MyPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export { Login };
