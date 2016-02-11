let bindEvents = (ev) => {
	for (let p in ev) {
		console.log(p, ev);
	}
}

export { bindEvents }