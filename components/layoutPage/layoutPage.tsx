import React, { useState } from 'react'
import PropTypes from 'prop-types'
import style from './layoutPage.module.scss'
import Navbar from '../navbar/navbar'
import Overview from '../overview/overview'
import About from '../about/about'
import Resume from '../resume/resume'
import classNames from 'classnames'

const CONTENT_LIST = [
	{
		id: 0,
		content: <About />,
	},
	{
		id: 1,
		content: <Resume />,
	},
	{
		id: 2,
		content: <Resume />,
	},
	{
		id: 3,
		content: <Resume />,
	},
	{
		id: 4,
		content: <Resume />,
	},
	{
		id: 5,
		content: <Resume />,
	},
]

const Layout = () => {
	const [id, setId] = useState(0)

	const onChangeId = (newId: number) => {
		if (id !== newId) setId(newId)
	}

	return (
		<div className={style.layoutWrapper}>
			<div className={style.layout}>
				<Navbar id={id} onChange={onChangeId} />
				<Overview onGoContact={() => onChangeId(4)} />
				<div className={style.contentWrapper}>
					{CONTENT_LIST.map((item) => (
						<div
							key={item.id}
							className={classNames(style.content, item.id === id ? style.active : '')}
						>
							{item.content}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

Layout.propTypes = {}

export default Layout
