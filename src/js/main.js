<<<<<<< HEAD
import './slider';
import { modals } from './modules/modals.js';
import { tabs } from './modules/tabs.js';
import { forms } from './modules/forms.js';
import { createMap } from './modules/yanex-map';
import { changeModalState } from './modules/changeModalState.js';
=======
import "./slider";
import { modals } from "./modules/modals.js";
import { tabs } from "./modules/tabs.js";
import { forms } from "./modules/forms.js";
import { changeModalState } from "./modules/changeModalState.js";
import { timer } from "./modules/timer.js";
import { images } from "./modules/images.js";
>>>>>>> be25413a0f84e7883ae0f3c717b8cb2bad06b098

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

<<<<<<< HEAD
	createMap();
	let modalState = {};
	changeModalState(modalState);

	modals();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
	forms();
=======
  let modalState = {};
  changeModalState(modalState);
  let deadline = '2023-05-21';

  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );
  forms();

  timer('.container1', deadline);

  images();
>>>>>>> be25413a0f84e7883ae0f3c717b8cb2bad06b098
});

console.log('main.js');
