import React from 'react'
import Rating from './rating/Rating'
import BurgerIcon from '../../burger/Burger'

const MainHero = () => {


    const [rating, setRating] = React.useState(null)
    const [isMenuOpened, setIsMenuOpened] = React.useState(false)

    const onMenuIconClick = () => {
        setIsMenuOpened(!isMenuOpened)
    }

    return (
        <div className='main__hero hero'>
            <div className="hero__container">
                <div className="hero__body">
                    <div className="hero__top top-hero">
                        <div className='top-hero__body'>
                            <div className="top-hero__img">
                                <img src="/hero/avatar.png" alt="user photo" />
                            </div>
                            <div className="top-hero__info info-top-hero">
                                <h2 className="info-top-hero__title">Lorem Ipsum is simply dummy</h2>
                                <ul className="info-top-hero__list">
                                    <li className="info-top-hero__item">
                                        <a href="#!" className="info-top-hero__link link-top-hero">
                                            <span alt="android" className="link-top-hero__icon">
                                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.14844 2.77344C3.98438 2.77344 3.85156 2.63281 3.85156 2.46875C3.85156 2.30469 3.98438 2.16406 4.14844 2.16406C4.32031 2.16406 4.45312 2.30469 4.45312 2.46875C4.45312 2.63281 4.32031 2.77344 4.14844 2.77344ZM7.44531 2.77344C7.27344 2.77344 7.14063 2.63281 7.14063 2.46875C7.14063 2.30469 7.27344 2.16406 7.44531 2.16406C7.60938 2.16406 7.74219 2.30469 7.74219 2.46875C7.74219 2.63281 7.60938 2.77344 7.44531 2.77344ZM1.10156 4.21094C0.65625 4.21094 0.296875 4.57031 0.296875 5.00781V8.36719C0.296875 8.8125 0.65625 9.17187 1.10156 9.17187C1.54688 9.17187 1.89844 8.8125 1.89844 8.36719V5.00781C1.89844 4.57031 1.53906 4.21094 1.10156 4.21094ZM9.38281 4.35937H2.21094V9.5625C2.21094 10.0391 2.59375 10.4219 3.07031 10.4219H3.64844L3.65625 12.1953C3.65625 12.6406 4.01562 13 4.45312 13C4.89844 13 5.25781 12.6406 5.25781 12.1953V10.4219H6.33594V12.1953C6.33594 12.6406 6.69531 13 7.14063 13C7.58594 13 7.94531 12.6406 7.94531 12.1953V10.4219H8.53125C9 10.4219 9.38281 10.0391 9.38281 9.5625V4.35937ZM7.57031 1.19531L8.125 0.171874C8.15625 0.117187 8.14063 0.0468746 8.08594 0.0156248C8.03125 -0.00781286 7.96094 0.00781167 7.92969 0.0624992L7.36719 1.09375C6.89063 0.882812 6.35938 0.765624 5.79688 0.765624C5.23438 0.765624 4.70313 0.882812 4.22656 1.09375L3.66406 0.0624992C3.63281 0.00781167 3.5625 -0.00781286 3.50781 0.0156248C3.45313 0.0468746 3.4375 0.117187 3.46875 0.171874L4.02344 1.19531C2.92188 1.75781 2.17969 2.83594 2.17969 4.07812H9.40625C9.40625 2.83594 8.66406 1.75781 7.57031 1.19531ZM11.2969 5.00781C11.2969 4.5625 10.9375 4.21094 10.4922 4.21094C10.0547 4.21094 9.69531 4.5625 9.69531 5.00781V8.36719C9.69531 8.8125 10.0547 9.17187 10.4922 9.17187C10.9375 9.17187 11.2969 8.8125 11.2969 8.36719V5.00781Z" fill="white" />
                                                </svg>
                                            </span>
                                            <span className="link-top-hero__title">Android</span>
                                        </a>
                                    </li>
                                    <li className="info-top-hero__item">
                                        <a href="#!" className="info-top-hero__link link-top-hero">
                                            <span alt="android" className="link-top-hero__icon">
                                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.1953 9.49219C10.7344 9.35156 10.3203 9.02344 9.96094 8.50781C9.60156 7.99219 9.42188 7.40625 9.42188 6.76562C9.42188 6.17187 9.59375 5.63281 9.92969 5.14844C10.1172 4.875 10.4141 4.57031 10.8203 4.22656C10.5547 3.89844 10.2813 3.63281 10.0078 3.44531C9.52344 3.10937 8.96875 2.9375 8.34375 2.9375C7.96094 2.9375 7.50781 3.03125 6.99219 3.20312C6.47656 3.38281 6.10156 3.46875 5.875 3.46875C5.69531 3.46875 5.33594 3.39062 4.79688 3.23437C4.25 3.07812 3.79688 3 3.41406 3C2.51563 3 1.78125 3.375 1.19531 4.125C0.609375 4.88281 0.3125 5.85156 0.3125 7.04687C0.3125 8.32812 0.703125 9.63281 1.46094 10.9766C2.23438 12.3203 3.00781 13 3.8125 13C4.07031 13 4.41406 12.9141 4.84375 12.7344C5.26563 12.5625 5.64063 12.4766 5.95313 12.4766C6.27344 12.4766 6.67188 12.5547 7.13281 12.7266C7.60156 12.8906 7.96094 12.9766 8.22656 12.9766C8.89063 12.9766 9.5625 12.4688 10.2344 11.4453C10.6875 10.7656 11 10.1094 11.1953 9.49219ZM8.25781 0.328125C8.25781 0.273437 8.25 0.226562 8.25 0.171875C8.24219 0.124999 8.22656 0.0703119 8.21094 -9.53674e-07C7.30469 0.210937 6.64844 0.593749 6.25781 1.15625C5.86719 1.71875 5.66406 2.39062 5.64844 3.16406C6.01563 3.13281 6.28125 3.08594 6.46094 3.03125C6.74219 2.9375 7.02344 2.75 7.30469 2.46875C7.63281 2.14062 7.875 1.78125 8.03125 1.39062C8.17969 1.00781 8.25781 0.648437 8.25781 0.328125Z" fill="white" />
                                                </svg>
                                            </span>
                                            <span className="link-top-hero__title">iOS</span>
                                        </a>
                                    </li>
                                    <li className="info-top-hero__item">
                                        <a href="#!" className="info-top-hero__link link-top-hero">
                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.0745 10.1156C15.8952 9.93619 15.6771 9.8464 15.4208 9.8464H10.9591L9.65143 11.154C9.27961 11.513 8.84374 11.6925 8.34375 11.6925C7.84386 11.6925 7.40785 11.5132 7.03607 11.154L5.738 9.8464H1.26682C1.01045 9.8464 0.792518 9.93629 0.612977 10.1156C0.43347 10.2951 0.34375 10.513 0.34375 10.7696V13.8464C0.34375 14.1028 0.43347 14.3207 0.612977 14.5002C0.792485 14.6797 1.01042 14.7693 1.26682 14.7693H15.4208C15.6771 14.7693 15.8952 14.6797 16.0745 14.5002C16.2541 14.3207 16.3438 14.1028 16.3438 13.8464V10.7696C16.3438 10.513 16.2541 10.2951 16.0745 10.1156ZM12.4689 13.356C12.347 13.4778 12.2027 13.5387 12.036 13.5387C11.8693 13.5387 11.7253 13.4778 11.6033 13.356C11.4816 13.2342 11.4208 13.09 11.4208 12.9234C11.4208 12.7568 11.4816 12.6124 11.6033 12.4907C11.7253 12.3688 11.8693 12.3078 12.036 12.3078C12.2027 12.3078 12.3469 12.3688 12.4689 12.4907C12.5906 12.6123 12.6515 12.7567 12.6515 12.9234C12.6515 13.09 12.5906 13.2342 12.4689 13.356ZM14.9303 13.356C14.8086 13.4778 14.6643 13.5387 14.4976 13.5387C14.3309 13.5387 14.1868 13.4778 14.0649 13.356C13.9432 13.2342 13.8824 13.09 13.8824 12.9234C13.8824 12.7568 13.9432 12.6124 14.0649 12.4907C14.1867 12.3688 14.3309 12.3078 14.4976 12.3078C14.6643 12.3078 14.8085 12.3688 14.9303 12.4907C15.0521 12.6123 15.1131 12.7567 15.1131 12.9234C15.1131 13.09 15.0522 13.2342 14.9303 13.356Z" fill="white" />
                                                <path d="M7.91108 10.279C8.02653 10.4007 8.17074 10.4616 8.34375 10.4616C8.51689 10.4616 8.66094 10.4007 8.77642 10.279L13.0842 5.97126C13.2828 5.78539 13.3278 5.56099 13.2188 5.29816C13.11 5.04823 12.9208 4.92325 12.6515 4.92312H10.1899V0.615411C10.1899 0.448768 10.1289 0.304523 10.0073 0.18274C9.88539 0.0609247 9.74121 0 9.57464 0H7.11286C6.94629 0 6.80204 0.0609247 6.68019 0.18274C6.55844 0.304523 6.49752 0.448735 6.49752 0.615411V4.92315H4.03598C3.76662 4.92315 3.57761 5.04827 3.46863 5.2982C3.35971 5.56092 3.40454 5.78543 3.60331 5.9713L7.91108 10.279Z" fill="white" />
                                            </svg>
                                            <span className="link-top-hero__title">Download on PC</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="top-hero__rating-info-block rating-info-block">
                                <div className="rating-info-block__diagram diagram">
                                    <div className="diagram__circle">
                                        <div className="diagram__value">
                                            6.4
                                        </div>
                                        <svg>
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="40%" y2="100%">
                                                    <stop offset="0%" stopColor="#DC4A19" />
                                                    <stop offset="100%" stopColor="#FCC539" />
                                                </linearGradient>
                                            </defs>
                                            <circle className="diagram__progress" cx="43" cy="43" r="39" stroke="url(#gradient)" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="rating-info-block__info">
                                    <div className="rating-info-block__title">Players</div>
                                    <div className="rating-info-block__votes-number">12 votes</div>
                                    <div className="rating-info-block__your-rating">Your rating : <span>{rating}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__bottom">
                        <button onClick={onMenuIconClick} className="hero__button">
                            <span className="hero__button-title">{`${isMenuOpened ? 'Close' : 'More info'}`}</span>
                            <span className="hero__button-icon">
                                <BurgerIcon width={20} height={15} color={'gray'} text={'More info'} isOpened={isMenuOpened} />
                            </span>
                        </button>
                        <ul className={`hero__menu ${isMenuOpened && '_opened'}`}>
                            <li className="hero__item">
                                <a href="#!" className="hero__link">Lorem Ipsum is simply dummy</a>
                            </li>
                            <li className="hero__item">
                                <a href="#!" className="hero__link">item</a>
                            </li>
                            <li className="hero__item">
                                <a href="#!" className="hero__link">item</a>
                            </li>
                            <li className="hero__item">
                                <a href="#!" className="hero__link">item</a>
                            </li>
                            <li className="hero__item">
                                <a href="#!" className="hero__link">item</a>
                            </li>
                        </ul>
                        <Rating setRating={setRating} rating={rating} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHero