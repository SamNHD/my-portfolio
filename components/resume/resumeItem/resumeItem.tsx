import React from 'react'
import PropTypes from 'prop-types'
import style from './resumeItem.module.scss'

interface ResumeItemProps {
	fromTime: string | number
	toTime: string | number
	title: string
	company?: string
	position?: string
	description?: string
	note?: string
}

const ResumeItem = (props: ResumeItemProps) => {
	return (
		<div className={style.resumeItem}>
			<div className={style.resumeItemTime}>{`${props.fromTime} - ${props.toTime}`}</div>
			<div className={style.resumeItemTitleWrapper}>
				<div className={style.resumeItemTitle}>{props.title}</div>
				<div className={style.resumeItemCompany}>{props.company}</div>
			</div>
			<div className={style.resumeItemPosition}>{props.position}</div>
			<div className={style.resumeItemDesc}>{props.description}</div>
			<div className={style.resumeItemNote}>{props.note}</div>
		</div>
	)
}

ResumeItem.propTypes = {}

export default ResumeItem
