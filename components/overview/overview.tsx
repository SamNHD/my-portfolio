import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import style from './overview.module.scss'
import OverviewFooter from './overviewFooter'
import { OVERVIEW_DATA } from '@/public/constants'
import Image, { StaticImageData } from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slide from '../slide/slide'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons'

export interface Data {
	photo: StaticImageData
	name: string
	title: string[]
	contact: {
		url: string
		icon: IconDefinition
	}[]
}

export interface OverviewProps {
	onGoContact: () => void
}

const Overview = (props: OverviewProps) => {
	const isFirstRef = useRef(true)
	const [id, setId] = useState(0)
	const [currentText, setCurrentText] = useState('')

	let character = 0
	let timeOut: string | number | NodeJS.Timeout | undefined

	const typeWriter = (text: string) => {
		const length = text.length
		timeOut = setTimeout(
			() => {
				character++
				var type = text.substring(0, character)
				setCurrentText(type)
				typeWriter(text)

				if (character === length) {
					setId(id >= OVERVIEW_DATA.title.length - 1 ? 0 : id + 1)
					character = 0
					clearTimeout(timeOut)
				}
				if (isFirstRef.current) {
					isFirstRef.current = false
				}
			},
			isFirstRef.current ? 0 : character === 0 ? 5000 : 100,
		)
	}

	useEffect(() => {
		typeWriter(OVERVIEW_DATA.title[id])
	}, [id])

	const renderOverviewData = (data: Data) => {
		return (
			<div className={style.overviewData}>
				<div className={style.overviewDataName}>{data.name}</div>
				<div className={style.overviewDataTitle}>{currentText}</div>
				<div className={style.overviewDataContact}>
					{data.contact.map((item, index: number) => (
						<a
							key={index}
							target='_blank'
							href={item.url}
							className={style.overviewDataContactItem}
						>
							<FontAwesomeIcon className={style.overviewDataIcon} icon={item.icon} />
						</a>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className={style.overview}>
			<div className={style.overviewAvatarWrapper}>
				<Slide />
				<div className={style.overviewAvatar}>
					<Image src={OVERVIEW_DATA.photo} alt='' width={140} height={140} />
				</div>
			</div>
			{renderOverviewData(OVERVIEW_DATA)}
			<OverviewFooter onGoContact={props.onGoContact} />
		</div>
	)
}

Overview.propTypes = {}

export default Overview
