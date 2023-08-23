import React from 'react'
import PropTypes from 'prop-types'
import style from './contentIconTitle.module.scss'

interface contentIconTitleProps {
	title: string
	icon: JSX.Element
}

const ContentIconTitle = (props: contentIconTitleProps) => {
	return (
		<div className={style.contentIconTitle}>
			<div className={style.icon}>{props.icon}</div>
			<div className={style.title}>{props.title}</div>
		</div>
	)
}

ContentIconTitle.propTypes = {}

export default ContentIconTitle
