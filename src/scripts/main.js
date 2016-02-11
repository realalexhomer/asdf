import AddView from './views/add.js';

document.addEventListener("DOMContentLoaded", () => {
	if (document.getElementById('add')) {
		new AddView(document.getElementById('add'));
	}
});
