let instance;
export default class Databus {
	constructor() {		
		if(instance) return instance;
		instance = this
		this.canvas;
		this.ctx;
		this.imgObj = {};
		this.isLoadSuccess = false;
		this.step = 1;
	}
}