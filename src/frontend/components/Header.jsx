import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutRequest } from '../actions';

import gravatar from '../utils/gravatar';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icon-user.png';

import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt='Ícono de usuario' />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && (
            <li>
              <a href='/'>{user.name}</a>
            </li>
          )}
          <li>
            {hasUser ? (
              <a href='#logout' onClick={handleLogout}>
                Cerrar Sesión
              </a>
            ) : (
              <Link to='/login'>Iniciar sesión</Link>
            )}
          </li>
          {/* <li>
          <a href='/'>Cerrar Sesión</a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
