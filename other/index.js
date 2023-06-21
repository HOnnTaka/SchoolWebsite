window.addEventListener('load', () => {
	const main = document.querySelector('main')

	//followMouse
	const mouse = document.getElementById('followMouse')
	const mouse2 = document.getElementById('followMouse2')
	let scrollThrittle1 = null
	window.addEventListener('mousemove', (e) => {
		let evn = e
		if (scrollThrittle1) return
		//
		mouse2.style.left = 'calc(' + evn.pageX + 'px - 1vmin)'
		mouse2.style.top = 'calc(' + evn.pageY + 'px - 1vmin)'
		//
		scrollThrittle1 = setTimeout(() => {

			setTimeout(() => {
				mouse.style.left = 'calc(' + evn.clientX + 'px - 5vmin)'
				mouse.style.top = 'calc(' + evn.clientY + 'px - 5vmin)'
				if (getComputedStyle(e.target).cursor == 'pointer') {
					mouse.style.animation =
						'ease-in-out mouse2 1.5s infinite alternate-reverse'
				} else {
					mouse.style.animation =
						'ease-in-out mouse1 1.5s infinite alternate-reverse'
				}
			}, 100)
			scrollThrittle1 = null

		}, 1)
	})




	// music
	const music = document.querySelector('#music')
	audio = music.childNodes[3]
	musicImg = music.childNodes[1]
	audio.volume = 0.2
	var promise = audio.play();

	if (promise !== undefined) {
		promise.then().catch(error => {
			console.log(error + '\n翻译：权限错误:播放失败，在用户与文档交互前网页不能自动播放。');
			window.addEventListener('click', firstPlay)
			''
		});
	}

	function firstPlay() {
		audio.play()
		musicImg.style.animation = 'linear 1s music infinite'
		window.removeEventListener('click', firstPlay)
	}
	music.onclick = () => {
		if (audio.paused) {
			audio.play()
			musicImg.style.animation = 'linear 1s music infinite'
		} else {
			audio.pause()
			musicImg.style.animation = ''
		}
	}

	//scroll
	const body = document.querySelector('body')
	let scrollThrittle2 = null
	main.onscroll = (e) => {
		if (scrollThrittle2) return

		scrollThrittle2 = setTimeout(() => {
			let top = main.scrollTop
			if (top < innerHeight / 2) {
				//page1~2
				body.className = 'a1'
				//回到顶部
				upward.style.opacity = '0'
				upward.style.pointerEvents = 'none'
			} else {
				body.className = 'a2'
				upward.style.opacity = '1'
				upward.style.pointerEvents = 'all'
			}

			scrollThrittle2 = null
		}, 150)
	}

	//upward
	const upward = document.getElementById('upward')
	upward.onclick = () => {
		main.scrollTo(0, 0)
	}

	//login
	// login&register
	loginBtn = document.getElementById("loginBtn");
	loginBg = document.getElementById("loginBg");
	login = document.getElementById("login");
	loginBack = document.getElementById("loginBack");

	// 进入
	loginBtn.onclick = (e) => {
		loginBg.style.top = e.clientY + "px";
		loginBg.style.left = e.clientX + "px";
		loginBg.style.animation = "loginBg1 1.5s forwards";
		login.className = "login";
	};
	// 返回
	loginBack.addEventListener('click', lgback)

	function lgback() {
		if (login.className == 'login') {
			loginBg.style.animation = "loginBg2 1s forwards";
			login.className = "";
		} else {
			registerBtn.style.animation = 'registerBg2 1s forwards'
			login.className = "login";
		}
	}

	// input
	inputs = document.querySelectorAll("input[type=text],input[type=password]");
	inputs.forEach((input) => {
		input.addEventListener("focus", function() {
			this.previousElementSibling.className = 'oninput'
		});
		input.addEventListener('blur', function() {
			if (this.value == '') {
				this.previousElementSibling.className = ''
			}
		})
	});

	// register
	registerBtn = document.getElementById('registerBtn')
	registerBtn.addEventListener('click', function() {
		loginBack.removeEventListener('click', lgback)
		setTimeout(() => {
			login.className = "register"
			loginBack.addEventListener('click', lgback)
		}, 500)
		this.style.animation = 'registerBg1 1s forwards'
	})


	// imgShow
	const imgS = document.querySelectorAll('section:nth-of-type(4) article img')
	const imgShow = document.getElementById('imgShowBox')
	imgS.forEach((item) => {
		item.addEventListener('click', () => {
			imgShow.firstElementChild.src = item.src
			show(imgShow)
		})
	})
	imgShow.onclick = () => {
		hide(imgShow)
	}

	//animation
	const animates = document.querySelectorAll('.animate')
	const io = new IntersectionObserver((entries) => {
		entries.forEach(item => {
			item.target.style.transition = Math.ceil(2000 * Math.random()) + 1000 + 'ms'
			if (item.isIntersecting) {
				item.target.style.opacity = 1
				item.target.style.transform = 'scale(1)'
			} else {
				item.target.style.transition = '100ms'
				item.target.style.opacity = -0
				item.target.style.transform = 'scale(' + (Math.ceil(7 * Math.random()) + 2) *
					0.1 +
					')'
			}
		})
	}, {
		root: main
	})
	animates.forEach((item) => {
		io.observe(item)
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
})
