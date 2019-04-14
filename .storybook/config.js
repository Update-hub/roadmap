import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import { addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs';

Vue.use(Vuex);

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

configure(loadStories, module);
