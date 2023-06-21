window.addEventListener('load', () => {




	//banner
	const imgs = document.querySelectorAll('#banner img')
	let imgCount = 0
	banChange(2, 0)
	let slideshow = setInterval(() => {
		let t = imgCount
		imgCount = imgCount == imgs.length - 1 ? 0 : imgCount + 1
		banChange(t, imgCount)
	}, 3500)

	function banChange(from, to) {
		imgs[from].style.opacity = 0
		imgs[to].style.opacity = 1
	}

	//list
	const listBtn = document.getElementById('list')
	const list = document.querySelector('header nav')
	const listBg = document.querySelector('header div>div')
	listBtn.addEventListener('click', () => {
		listBg.style.height = '120vh'
		list.style.opacity = 1
		list.style.height = '70vh'
		list.style.pointerEvents = 'all'
		list.style.overflowY = 'auto'
	})
	listBg.addEventListener('click', () => {
		listBg.style.height = '0'
		list.style.opacity = 0
		list.style.height = '0'
		list.style.pointerEvents = 'none'
	})


	//search
	const searchBtn = document.getElementById('searchBtn')
	const search = document.getElementById('search')
	const inputS = document.querySelector('#search input')
	const buttonS = document.getElementById('searchS')
	searchBtn.addEventListener('click', () => {
		show(search)
	})
	search.addEventListener('click', () => {
		hide(search)
	})
	inputS.addEventListener('click', (e) => {
		e.stopPropagation()
	})
	buttonS.addEventListener('click', (e) => {
		e.stopPropagation()
	})


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

	// moveboxBg
	let movebox0 = document.getElementById('movebox0')
	let movebox = document.getElementById('movebox')
	let movebox2 = document.getElementById('movebox2')
	let scHeight, scWidth
	window.onresize = () => {
		scHeight = document.documentElement.clientHeight
		scWidth = document.documentElement.clientWidth
	}
	boxmove()
	setInterval(boxmove, 4000)

	function boxmove() {
		y = movebox.offsetTop
		x = movebox.offsetLeft
		scHeight = document.documentElement.clientHeight
		scWidth = document.documentElement.clientWidth

		Y = Math.ceil(Math.random() * scHeight)
		X = Math.ceil(Math.random() * scWidth)

		movebox0.style.top = Y + 'px'
		movebox0.style.left = X + 'px'
		setTimeout(() => {
			movebox.style.top = Y + Math.ceil(Math.random() * 2000) - 1000 + 'px'
			movebox.style.left = X + Math.ceil(Math.random() * 2000) - 1000 + 'px'
		}, 500)
		setTimeout(() => {
			movebox2.style.top = Y + Math.ceil(Math.random() * 1000) - 500 + 'px'
			movebox2.style.left = X + Math.ceil(Math.random() * 1000) - 500 + 'px'
		}, 1500)
	}

})
