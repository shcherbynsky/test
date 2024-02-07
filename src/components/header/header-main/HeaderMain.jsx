import React from 'react'
import MenuSecondary from '../secondary-menu/MenuSecondary'
import BurgerIcon from '../../burger/Burger'


const HeaderMain = ({ theme }) => {

    const menuItems = [
        {
            title: 'Item',
            url: '',
        },
        {
            title: 'Item',
            url: '',
        },
        {
            title: 'Item',
            url: '',
        },
        {
            title: 'Item',
            url: '',
        },
        {
            title: 'Item',
            url: '',
        },
        {
            title: 'Item',
            url: '',
        },
        {
            title: 'Item',
            url: '',
        },
        {
            title: 'Item',
            url: '',
        },
    ]
    // Slide menu state
    const [menuOpened, isMenuOpend] = React.useState(false)

    // Init elements which close slide menu
    const searchButtonRef = React.useRef();
    const logoRef = React.useRef();
    const mainMenuLinkRef = React.useRef();
    const secondaryMenuLinkRef = React.useRef();

    // block body from scrolling while menu is opened
    React.useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
       

        // close menu when click logo, searchNutton or links
        menuOpened ? body.classList.add('_locked') : body.classList.remove('_locked')

        const handleClickOutsideModal = (e) => {
           if (e.composedPath().includes(logoRef.current) ||
           e.composedPath().includes(searchButtonRef.current) ||
           e.composedPath().includes(mainMenuLinkRef.current) ||
           e.composedPath().includes(secondaryMenuLinkRef.current))  {

            body.classList.remove('_locked')
            isMenuOpend(false)
           }

        }
        document.addEventListener('click', handleClickOutsideModal)

        return () => {
            document.removeEventListener('click', handleClickOutsideModal)
        }
    }, [menuOpened])


    // mapping menu links
    const menuElements = menuItems.map((item, index) => {
        return (
            <li key={index} ref={mainMenuLinkRef} className="menu-header-main__item">
                <a href={item.url} className="menu-header-main__link">{item.title}</a>
            </li>
        )
    })

    
    const onMenuIconClick = () => {
        isMenuOpend(!menuOpened)
    }

    return (
        <div className='header-main'>
            <nav className="header-main__container">
                <div ref={logoRef} className="header-main__logo logo">
                    <img src={theme === 'dark' ? 'header/logo-dark.png' : 'header/logo-light.png'} alt="logo" />
                </div>
                <div className={`header-main__body ${menuOpened && '_opened'}`}>
                    <MenuSecondary classTitle={'header-main__menu-secondary'} secondaryMenuLinkRef={secondaryMenuLinkRef}/>
                    <div className="header-main__menu menu-header-main">
                        <ul className="menu-header-main__items">
                            {menuElements}
                        </ul>
                    </div>
                    <div className="search">
                        <input type="text" placeholder='Search for...' className="search__input" />
                        <button ref={searchButtonRef} className="search__icon">
                            <img src="/icons/search-icon.svg" alt="search" />
                        </button>
                    </div>
                </div>
                <button aria-labelledby="main-menu" onClick={()=> onMenuIconClick()} className="header-main__icon">
                    <BurgerIcon width={25} height={20} color={'blue'} isOpened={menuOpened}/>
                </button>
                <span id="main-menu" className="hide">Main menu</span>
            </nav>
        </div>
    )
}

export default HeaderMain