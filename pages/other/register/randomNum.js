// 1.随机生成安全码
export function randomNum() {

	return new Promise((reslove, reject) => {

		let response = ""+Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math
		.random() * 9) + Math.round(Math.random() * 9);

		reslove(response)
	})



}
