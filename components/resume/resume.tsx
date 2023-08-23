import React from 'react'
import PropTypes from 'prop-types'
import style from './resume.module.scss'
import ContentTitle from '../contentTitle/contentTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import ContentIconTitle from '../contentIconTitle/contentIconTitle'
import { EDUCATION_DATA, EXPERIENCE_DATA } from '@/public/constants'
import ResumeItem from './resumeItem/resumeItem'

const Resume = () => {
	return (
		<div className={style.resume}>
			<div className={style.resumeItem}>
				<ContentTitle title='Resume' />
				<div className={style.resumeItemContentWrapper}>
					<div className={style.resumeItemContent}>
						<ContentIconTitle icon={<FontAwesomeIcon icon={faBriefcase} />} title='Experience' />
						{EXPERIENCE_DATA.map((item, index) => (
							<ResumeItem key={index} {...item} />
						))}
					</div>
					<div className={style.resumeItemContent}>
						<ContentIconTitle icon={<FontAwesomeIcon icon={faGraduationCap} />} title='Education' />
						{EDUCATION_DATA.map((item, index) => (
							<ResumeItem key={index} {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

Resume.propTypes = {}

export default Resume
