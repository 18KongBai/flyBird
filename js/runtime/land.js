import Databus from "../databus"

const databus = new Databus();
export default class Land {
	constructor() {
		this.images = databus.imgObj.land;
		this.x = 0;
		this.y = databus.canvas.height - this.images.height;
		this.w = this.images.width;
		this.h = this.images.height;
		console.log('xxx');
		this.render()
	}

	update() {
		this.x -= databus.step;
		if(this.x <= - this.w) {
			this.x = 0
		}
	}

	render() {
		databus.ctx.drawImage(this.images, this.x, this.y, this.w, this.h);
		databus.ctx.drawImage(this.images, this.x + this.w, this.y, this.w, this.h);
		databus.ctx.drawImage(this.images, this.x + this.w * 2, this.y, this.w, this.h);
	}
}