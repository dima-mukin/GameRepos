/* ************************************** BEGIN VIEW ************************************** */

var view = {

	showNumber: function(n) {
		var el = document.getElementById("showResult");
		el.innerHTML = n;
	}

};

/* ************************************** END VIEW ************************************** */


/* ************************************** BEGIN MODEL ************************************** */

var model = {

	number: 0,

	calculate: function(x, y) {
		this.number = x * y;
		var result = this.number;

		view.showNumber(result);
	}

};

/* ************************************** END MODEL ************************************** */


/* ************************************** BEGIN CONTROLLER ************************************** */

var controller = {

	handleClick: function() {
		model.calculate(3, 10);
	}

};

/* ************************************** END CONTROLLER ************************************** */


/* ************************************** ANONYMOUS INITIALIZE FUNCTION ************************************** */

(function() {
	var app = {
		init: function() {
			this.main();
			this.event();
		},
		main: function() {

		},
		event: function() {
			var el = document.getElementById("calcUser");
			el.onclick = controller.handleClick;
		}
	};
	app.init();
}());