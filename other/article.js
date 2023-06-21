window.onload = () => {
	const main = document.querySelector('main')

	//followMouse
	const mouse = document.getElementById('followMouse')
	const mouse2 = document.getElementById('followMouse2')
	let scrollThrittle1 = null
	window.addEventListener('mousemove', (evn) => {
		if (scrollThrittle1) return
		//
		mouse2.style.left = 'calc(' + evn.clientX + 'px - 1vmin)'
		mouse2.style.top = 'calc(' + evn.clientY + 'px - 1vmin)'
		//
		scrollThrittle1 = setTimeout(() => {
			setTimeout(() => {
				mouse.style.left = 'calc(' + evn.clientX + 'px - 5vmin)'
				mouse.style.top = 'calc(' + evn.clientY + 'px - 5vmin)'
				if (getComputedStyle(evn.target).cursor == 'pointer') {
					mouse.style.animation =
						'ease-in-out mouse2 1s infinite alternate-reverse'
				} else {
					mouse.style.animation =
						'ease-in-out mouse1 2s infinite alternate-reverse'
				}
			}, 100)
			scrollThrittle1 = null

		}, 1)
	})

	//scroll
	const body = document.querySelector('body')
	const upward = document.getElementById('upward')

	let scrollThrittle2 = null
	body.onscroll = (e) => {
		if (scrollThrittle2) return
		scrollThrittle2 = setTimeout(() => {
			let top = document.documentElement.scrollTop || body.scrollTop
			if (top <= 0) {
				//page1~2
				body.className = 'a1'
				//回到顶部
				upward.style.opacity = '0'
			} else {
				body.className = 'a2'
				upward.style.opacity = '1'
			}
			scrollThrittle2 = null
		}, 150)
	}

	//upward
	upward.onclick = () => {
		window.scrollTo(0, 0)
	}
}
