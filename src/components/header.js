import React from 'react';
import { Link, IndexLink } from 'react-router';

const Logo = () => <div className="nav-home logo"><Link to="/"><img className="logo-img img-responsive" src="images/logo.png" /></Link></div> 
const Nav = () => {
	return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#rf-navbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Logo />
                </div>
                <div className="collapse navbar-collapse" id="rf-navbar">
                    <ul className="nav navbar-nav">
                        <li>
                            <IndexLink to="/" activeClassName="active">Home</IndexLink>
                        </li>
                        <li>
                            <Link to='about' activeClassName="active">About</Link>
                        </li>
                        <li>
                            <Link to='signin' activeClassName="active">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

class Header extends React.Component {
  render(){
    return (
        <div className="row">
            <Nav />
        </div>
 	);
  }
}

export default Header;