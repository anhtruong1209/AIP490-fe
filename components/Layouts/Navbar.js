import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import withTransHook from '../../HOC/withTranslate';
import { withRouter } from 'next/router'
import baseRs from '../../utils/baseRs';
class Navbar extends Component {
    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const { router, trans } = this.props
        return (
            <>
                <div id="navbar" className="navbar-area fixed-top">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={baseRs + "icon/logo_fpt.png"} alt="logo"/>
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                    </li>

                                    <li className="nav-item" style={{padding:'14px'}}>

                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link" > {trans["nav-item.about.english"]}
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                {trans["demopage"]} <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/">
                                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                                        {trans["footer.service-1"]} <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>
                                                
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/demo/face-landmark" activeClassName="active">
                                                            <a className="nav-link">{trans["face.lanmark"]}</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item" style={{padding:'14px'}} >
                                        <Link href="/contact"  activeClassName="active">
                                            <a className="nav-link">
                                                {trans["nav-item.contact.english"]}
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                            {trans["nav-item.language.english"]} <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href={ router.asPath } locale="en" activeClassName={ router.locale === "en" ? "active" : undefined }>
                                                    <a className="nav-link">{trans["navbar.language.english"]}</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href={ router.asPath } locale="vi" activeClassName={ router.locale === "vi" ? "active" : undefined }>
                                                    <a className="nav-link">{trans["navbar.language.vietnamese"]}</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href={ router.asPath } locale="ja" activeClassName={ router.locale === "ja" ? "active" : undefined }>
                                                    <a className="nav-link">{trans["navbar.language.japanese"]}</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href={ router.asPath } locale="kr" activeClassName={ router.locale === "kr" ? "active" : undefined }>
                                                    <a className="nav-link">{trans["navbar.language.korean"]}</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default withRouter(withTransHook(Navbar));