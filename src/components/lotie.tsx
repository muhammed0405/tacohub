import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'

const LottieAnimation = ({ lottieJson }) => {
	const animationContainer = useRef(null)

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: lottieJson,
		})

		return () => anim.destroy() // анимацияны токтотуу үчүн
	}, [lottieJson])

	return <div ref={animationContainer} />
}

export default LottieAnimation
