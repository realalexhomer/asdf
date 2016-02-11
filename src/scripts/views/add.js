import $ from 'jquery';
import { bindEvents } from '../helpers';

class AddView {
	constructor ($el, opts) {
		this.$el = $el;
		this.opts = opts;
		console.log('here');
		bindEvents({'click body' : 'value'});
	}
}

export default AddView;