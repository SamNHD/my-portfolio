import React, { useCallback, useEffect, useRef, useState } from 'react'
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
	const [id, setId] = useState(0)
	const [currentText, setCurrentText] = useState('')

	const typeWriter = useCallback((text: string, dataId: number) => {
		if (text.length < OVERVIEW_DATA.title[dataId]?.length) {
			const type = OVERVIEW_DATA.title[dataId].substring(0, text.length + 1)
			setCurrentText(type)
		}
	}, [])

	useEffect(() => {
		if (currentText !== OVERVIEW_DATA.title[id]) {
			const interval = setInterval(() => {
				typeWriter(currentText, id)
			}, 100)
			return () => clearInterval(interval)
		}
	}, [typeWriter, currentText, id])

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentText('')
			if (id === OVERVIEW_DATA.title.length - 1) {
				setId(0)
			} else {
				setId(id + 1)
			}
		}, 5000)
		return () => clearTimeout(timeout)
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
