/**
 * 
 * 1.金额格式化
 */
export function moneyFormat(valur) {

	let respones

	// const options = {
	// 	style: 'currency',
	// 	currency: 'CNY',
	// };


	respones = (valur).toLocaleString('zh-CN');
	console.log(respones)


	return respones
}
