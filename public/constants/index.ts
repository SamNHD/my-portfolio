import {
	faNewspaper,
	faPaperPlane,
	faRectangleList,
	faUser,
} from '@fortawesome/free-regular-svg-icons'
import { faEye, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import avatar from '../img/jpeg/avatar.jpg'
import back from '../img/jpeg/back.jpg'

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
	title: 'Front-end Developer',
	contact: [
		{
			icon: faInstagram,
			url: 'https://www.facebook.com/',
		},
		{
			icon: faFacebook,
			url: 'https://www.facebook.com/',
		},
	],
}

export const SLIDE_LIST = [
	{
		id: 0,
		url: avatar,
	},
	{
		id: 1,
		url: back,
	},
]
