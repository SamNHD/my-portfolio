import React from 'react'
import PropTypes from 'prop-types'
import style from './overview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCloudArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { OVERVIEW_FOOTER_DATA } from '@/public/constants'
import { OverviewProps } from './overview'

const OverviewFooter = (props: OverviewProps) => {
	const onClick = (id: number) => {
		if (id === 0) {
			window.open('https://www.facebook.com/', '_blank')
		} else {
			props.onGoContact()
		}
	}
	return (
		<div className={style.overviewFooter}>
			{OVERVIEW_FOOTER_DATA.map((item) => (
				<button onClick={() => onClick(item.id)} key={item.id} className={style.overviewFooterItem}>
					<div className={style.overviewFooterName}>{item.name}</div>
					<FontAwesomeIcon className={style.overviewFooterIcon} icon={item.icon} />
				</button>
			))}
		</div>
	)
}

OverviewFooter.propTypes = {}

export default OverviewFooter
