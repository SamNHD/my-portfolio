import React from 'react'
import PropTypes from 'prop-types'
import style from './about.module.scss'
import ContentTitle from '../contentTitle/contentTitle'
import { CONTACT_DATA } from '@/public/constants'

const About = () => {
	return (
		<div className={style.about}>
			<div className={style.aboutItem}>
				<ContentTitle title='About me' />
				<div className={style.aboutItemContent}>
					<div className={style.aboutName}>Hello! I’m Duong Nguyen.</div>
					<div className={style.aboutIntro}>
						I am a passionate and highly motivated Frontend Developer with +2.5 year of experience.
						I have worked on various frontend projects. My primary focus is on creating the best
						possible user interfaces, and I consistently strive to enhance my skills through
						continuous learning.
					</div>
					<div className={style.aboutInfo}>
						{CONTACT_DATA.map((item) => (
							<div key={item.title} className={style.aboutInfoItem}>
								<div className={style.aboutInfoItemTitle}>{item.title}</div>
								<div className={style.aboutInfoItemContent}>{item.value}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

About.propTypes = {}

export default About
