import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import style from './navbar.module.scss'
import { NAV_LIST } from '@/public/constants'

const Navbar = (props) => {
	return (
		<div className={style.navbar}>
			{NAV_LIST.map((item) => (
				<div
					key={item.id}
					onClick={() => props.onChange(item.id)}
					className={classNames(style.navbarItem, props.id === item.id ? style.active : '')}
				>
					<FontAwesomeIcon className={style.navbarIcon} icon={item.icon} />
					<div className={style.navbarName}>{item.name}</div>
				</div>
			))}
		</div>
	)
}

export default Navbar
