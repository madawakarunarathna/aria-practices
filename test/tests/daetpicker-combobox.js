'use strict';

const { ariaTest } = require('..');
const { By, Key } = require('selenium-webdriver');
const assertAttributeValues = require('../util/assertAttributeValues');
const assertAriaControls = require('../util/assertAriaControls');
const assertAriaLabelledby = require('../util/assertAriaLabelledby');
const assertAriaDescribedby = require('../util/assertAriaDescribedby');
const assertAriaLabelExists = require('../util/assertAriaLabelExists');
const assertAriaRoles = require('../util/assertAriaRoles');
const assertTabOrder = require('../util/assertTabOrder');


const exampleFile = 'datepicker/datepicker.html';

const ex = {
  comboboxSelector: '#myDatepicker',
  dialogSelector: '#myDatepickerDialog',
  gridSelector: '#myDatepickerGrid'
};


// Attributes

ariaTest('Combobox: has role', exampleFile, 'combobox-role', async (t) => {
  t.plan(1);
  await assertAriaRoles(t, 'example', 'combobox', 1, 'div');
});

ariaTest('Combobox: has aria-labelledby', exampleFile, 'combobox-aria-labelledby', async (t) => {
  t.plan(1);
  await assertAriaLabelledby(t, ex.comboboxSelector);
});

ariaTest('Combobox: has aria-haspopup set to "dialog"', exampleFile, 'combobox-aria-haspopup', async (t) => {
  t.plan(1);
  await assertAttributeValues(t, ex.menubuttonSelector, 'aria-haspopup', 'dialog');
});

