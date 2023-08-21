import React from 'react'
import PropTypes from 'prop-types'
// import myCV from '../../public/files/myCV.pdf'

const OverviewFooter = (props) => {
	const myCV = '../../public/files/NguyenHuuDuongCV.pdf'
	return (
		<div>
			<button
				onClick={() => {
					window.open(myCV)
				}}
			>
				asd
			</button>
		</div>
	)
}

OverviewFooter.propTypes = {}

export default OverviewFooter
