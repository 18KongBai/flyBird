import Databus from "../databus";

const databus = new Databus();
export default class Background {
	constructor() {
		// 获取白天 / 黑夜 背景图
		this.imgArr = [databus.imgObj.bg_day, databus.imgObj.bg_night];
		const randomIndex = Math.floor(Math.random()*2);
		this.images = this.imgArr[randomIndex]
		this.x = 0;
		this.y = 0;
		this.w = this.images.width;
		this.h = this.images.height;
		// 渲染白天或黑夜背景
		this.render()
	}

	update() {
		this.x -= databus.step
		if(this.x <= -this.w) {
			this.x = 0
		}
	}

	// 渲染白天或黑夜背景
	render() {
		databus.ctx.drawImage(this.images, this.x, 0, this.w, this.h)
		databus.ctx.drawImage(this.images,this.x + this.w ,0, this.w, this.h)
		databus.ctx.drawImage(this.images,this.x + this.w * 2, 0, this.w, this.h)
	}
}