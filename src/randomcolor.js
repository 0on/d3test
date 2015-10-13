function generate() {
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += Math.floor(Math.random() * 16).toString(16);	
	}
	return color;
}
