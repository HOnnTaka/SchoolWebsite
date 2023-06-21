window.addEventListener('load', () => {

	// 大图
	const ShowImgs = document.querySelectorAll('.A img')
	const showBox = document.getElementById('ShowBox')

	ShowImgs.forEach(item => {
		item.onclick = () => {
			showBox.childNodes[1].src = item.src
			show(showBox)
		}
	})
	showBox.onclick = () => {
		hide(showBox)
	}

	// function
	function show(item) {
		item.style.display = 'block'
		setTimeout(() => {
			item.style.opacity = '1'
		}, 0)
	}

	function hide(item) {
		item.style.opacity = '0'
		setTimeout(() => {
			item.style.display = 'none'
		}, 500)
	}
})
