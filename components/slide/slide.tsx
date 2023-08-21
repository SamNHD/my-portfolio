import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './slide.module.scss'
import { SLIDE_LIST } from '@/public/constants'
import classNames from 'classnames'
import Image from 'next/image'

const Slide = (props) => {
	const [id, setId] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setId(id === SLIDE_LIST.length - 1 ? 0 : id + 1)
		}, 5000)
		return () => clearTimeout(timeout)
	}, [id])

	return (
		<div className={style.slide}>
			{SLIDE_LIST.map((item) => (
				<div
					key={item.id}
					className={classNames(style.slideItem, id === item.id ? style.active : '')}
				>
					<Image src={item.url} alt='' width={480} height={350} />
				</div>
			))}
		</div>
	)
}

Slide.propTypes = {}

export default Slide
