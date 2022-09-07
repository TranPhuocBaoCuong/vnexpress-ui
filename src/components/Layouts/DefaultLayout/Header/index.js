import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faE, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('inner-left')}>
                        <div className={cx('logo')}>
                            <img
                                src="https://s1.vnecdn.net/vnexpress/restruct/i/v646/v2_2019/pc/graphics/logo.svg"
                                alt="vnexpress-logo"
                            />
                        </div>

                        <div className={cx('date')}>
                            <p>Thứ tư, 7/9/2022</p>
                        </div>
                    </div>

                    <div className={cx('inner-right')}>
                        <ul className={cx('category')}>
                            <li>
                                <button>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>Mới nhất</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <FontAwesomeIcon icon={faE} />
                                    <span>International</span>
                                </button>
                            </li>
                        </ul>

                        <div className={cx('search')}>
                            <input placeholder="Tìm kiếm" spellCheck={false} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>

                        <div className={cx('authentication')}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Đăng nhập</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={cx('nav')}></nav>
        </header>
    )
}

export default Header
