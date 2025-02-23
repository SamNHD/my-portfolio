import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './overview.module.scss'
import {
	faCloudArrowDown,
	faPaperPlane as faPaperPlaneSolid,
} from '@fortawesome/free-solid-svg-icons'
import { OverviewProps } from './overview'

const OverviewFooter = (props: OverviewProps) => {
	return (
		<div className={style.overviewFooter}>
			<a href='/files/NguyenHuuDuong_CV.pdf' download className={style.overviewFooterItem}>
				<div className={style.overviewFooterName}>Download CV</div>
				<FontAwesomeIcon className={style.overviewFooterIcon} icon={faCloudArrowDown} />
			</a>
			<button onClick={props.onGoContact} className={style.overviewFooterItem}>
				<div className={style.overviewFooterName}>Contact me</div>
				<FontAwesomeIcon className={style.overviewFooterIcon} icon={faPaperPlaneSolid} />
			</button>
		</div>
	)
}

OverviewFooter.propTypes = {}

export default OverviewFooter
