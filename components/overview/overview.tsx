import React from 'react'
import PropTypes from 'prop-types'
import style from './overview.module.scss'
import OverviewFooter from './overviewFooter'
import { OVERVIEW_DATA } from '@/public/constants'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slide from '../slide/slide'

const Overview = (props) => {
	const renderOverviewData = (data) => {
		return (
			<div className={style.overviewData}>
				<div className={style.overviewDataName}>{data.name}</div>
				<div className={style.overviewDataTitle}>{data.title}</div>
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
			<OverviewFooter />
		</div>
	)
}

Overview.propTypes = {}

export default Overview
