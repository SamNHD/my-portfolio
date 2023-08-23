import React from 'react'
import PropTypes from 'prop-types'
import style from './contentTitle.module.scss'

interface ContentTitleProps {
	title: string
}

const ContentTitle = (props: ContentTitleProps) => {
	const firstLetter = props.title[0]
	const letters = props.title.slice(1, props.title.length)
	return (
		<div className={style.contentTitleWrapper}>
			<div className={style.contentTitle}>
				<span className={style.contentTitleFirstLetter}>{firstLetter}</span>
				<span className={style.contentTitleLetters}>{letters}</span>
			</div>
		</div>
	)
}

ContentTitle.propTypes = {}

export default ContentTitle
