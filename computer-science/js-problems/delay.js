const START = Date.now();

function someFn() {
	console.log('time ', Date.now() - START);
	console.log('args ', arguments);
}

Function.prototype.delay = function (ms) {
	return (...args) => setTimeout(() => this(...args), ms);
};

const f = someFn.delay(1500);

f('Hi', 'by');
