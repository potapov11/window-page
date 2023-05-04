import './slider';
import { modals } from './modules/modals.js';
import { tabs } from './modules/tabs.js';
import { forms } from './modules/forms.js';

window.addEventListener('DOMContentLoaded', () => {
"use strict";
  modals();
  tabs('.glazing_slider' ,'.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider' ,'.no_click', '.decoration_content > div > div', 'after_click');
  forms();
});

console.log('main.js');



