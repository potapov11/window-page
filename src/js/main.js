import './slider';
import { modals } from './modules/modals.js';
import { tabs } from './modules/tabs.js';

window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs('.glazing_slider' ,'.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider' ,'.no_click', '.decoration_content > div > div', 'after_click');
});

console.log(1);
console.log(2);
console.log(3);

