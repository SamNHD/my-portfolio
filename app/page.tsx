'use client'
import React from 'react'
import style from './page.module.scss'
import LayoutPage from '@/components/layoutPage/layoutPage'

const Page = () => {
	return (
		<div className={style.page}>
			<LayoutPage />
		</div>
	)
}

export default Page
