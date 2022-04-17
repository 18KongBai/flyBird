import Databus from "./databus";
import ResourcesLoader from "./base/resourceLoader";
import Background from "./runtime/background";
import Land from "./runtime/land";
import CreateResources from "./base/createResources";

const databus = new Databus();
export default class Mian {
	constructor() {
		this.canvas = wx.createCanvas();
		this.ctx = this.canvas.getContext('2d');
		databus.canvas = this.canvas;
		databus.ctx = this.ctx
		// 加载图片
		this.resource = new ResourcesLoader()
		this.init()
	}

	// 初始化
	init() {
		// 加载background 和 land
		this.loopSuccess(() => {
			if(this.background && this.land) {
				this.update();
				return;
			}
			this.createResources = new CreateResources({name: '1'})
			this.land = new Land();
			this.background = new Background();
		})
	}

	update() {
		databus.ctx.clearRect(0,0, databus.canvas.width, databus.canvas.height);
		
		this.background.update();
		this.background.render();
		this.land.update()
		this.land.render()
	}

	// 轮询是否加载完图片
	loopSuccess(fn) {
		const timer = requestAnimationFrame(() => {
			if(databus.isLoadSuccess) {
				fn()
			}
			cancelAnimationFrame(timer);
			this.loopSuccess(fn)
		})
	}

}