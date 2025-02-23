import {
	faNewspaper,
	faPaperPlane,
	faRectangleList,
	faUser,
} from '@fortawesome/free-regular-svg-icons'
import {
	faCloudArrowDown,
	faEye,
	faLaptopCode,
	faPaperPlane as faPaperPlaneSolid,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import avatar from '../img/jpeg/avatar.jpg'
import bg_portfolio from '../img/jpeg/bg_portfolio.jpg'
import back from '../img/jpeg/back.jpg'
import dayjs from 'dayjs'

export const NAV_LIST = [
	{
		id: 0,
		icon: faUser,
		name: 'About',
	},
	{
		id: 1,
		icon: faRectangleList,
		name: 'Resume',
	},
	{
		id: 2,
		icon: faEye,
		name: 'Works',
	},
	{
		id: 3,
		icon: faNewspaper,
		name: 'Blog',
	},
	{
		id: 4,
		icon: faPaperPlane,
		name: 'Contact',
	},
	{
		id: 5,
		icon: faLaptopCode,
		name: 'Products',
	},
]

export const OVERVIEW_DATA = {
	photo: avatar,
	name: 'Duong Nguyen',
	title: ['Front-end Developer', 'Back-end Developer'],
	contact: [
		{
			icon: faInstagram,
			url: 'https://www.instagram.com/_duog_n/',
		},
		{
			icon: faFacebook,
			url: 'https://www.facebook.com/profile.php?id=100008391554261',
		},
	],
}

export const SLIDE_LIST = [
	{
		id: 0,
		url: bg_portfolio,
	},
	{
		id: 1,
		url: back,
	},
]

export const CONTACT_DATA = [
	{
		title: 'Age',
		value: dayjs().diff('1999-11-21', 'year'),
	},
	{
		title: 'Telephone',
		value: '0366073122',
	},
	{
		title: 'Email',
		value: 'duongnh2111@gmail.com',
	},
	{
		title: 'Address',
		value: 'Binh Duong',
	},
]

export const EXPERIENCE_DATA = [
	{
		fromTime: '7/2022',
		toTime: '8/2023',
		title: 'Bioheart Portal',
		company: 'ITR VietNam',
		position: 'Frontend Developer',
		description:
			'Cross-platform project where users can buy product and monitor their data (almost in the heart field, such as heart rate, resting heart rate,...) anywhere and anytime.',
	},
	{
		fromTime: '9/2022',
		toTime: '8/2023',
		title: 'Biocare-cardiac Portal',
		company: 'ITR VietNam',
		position: 'Frontend Developer',
		description:
			'Creates a system for clinics to manage their patients, especially in the cardiac field.',
	},
	{
		fromTime: '9/2022',
		toTime: '8/2023',
		title: 'ERP system of ITR Viet Nam company',
		company: 'ITR VietNam',
		position: 'Frontend Developer',
		description: 'ERP system: logwork, Human Resources Management,...',
	},
]

export const EDUCATION_DATA = [
	{
		fromTime: 2017,
		toTime: 2021,
		title: 'University of Information Technology - VNUHCM - UIT',
		note: 'Major: Information Technology',
	},
]
