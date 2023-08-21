import React, { useState } from 'react'
import PropTypes from 'prop-types'
import style from './layoutPage.module.scss'
import Navbar from '../navbar/navbar'
import Overview from '../overview/overview'

const Layout = () => {
	const [id, setId] = useState(0)

	const onChangeId = (newId: number) => {
		if (id !== newId) setId(newId)
	}

	return (
		<div className={style.layout}>
			<Navbar id={id} onChange={onChangeId} />
			<Overview />
			<div>content</div>
		</div>
	)
}

Layout.propTypes = {}

export default Layout
