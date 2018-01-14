const count = function (time, shownTime)  {

	setInterval( () => {
		shownTime--
		console.log(`han pasado ${time} milisegundos`)
	}, time)

}
	

export default count