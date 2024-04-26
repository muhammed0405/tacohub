import { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const NewsListSlider: FC = () => {
	const newsListSwiperRef = useRef<any>(null)

	const nextElementSwiper = () => {
		if (!newsListSwiperRef.current) return false

		newsListSwiperRef.current?.swiper?.slideNext()
	}

	return (
		<div className={`w-1/2`}>
			<Swiper ref={newsListSwiperRef} slidesPerView={2}>
				<SwiperSlide>
					<div className={`bg-black text-yellow`}>test2</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={`bg-black text-yellow`}>test2</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={`bg-black text-yellow`}>test2</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={`bg-black text-yellow`}>test2</div>
				</SwiperSlide>
			</Swiper>

			<div onClick={nextElementSwiper}>test</div>
		</div>
	)
}

export default NewsListSlider
