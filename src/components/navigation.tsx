import React, { lazy } from 'react';
import { Link } from 'gatsby';

interface NavigationProps {
  isDark: boolean;
  onUpdateTheme: (value: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({isDark, onUpdateTheme}) => {

  // const savedTheme: string | null = window.localStorage.getItem('theme')
  // console.log(savedTheme);

  return (
    <nav className='Navigation'>
      <div className='Navigation__Wrapper'>
        <Link to='/' className='Navigation__Brand'>
          <h2 className='Navigation__Title'>Roco Sittoni</h2>
        </Link>
        <ul className='Navigation__Tabs'>
            <Link to="/" className='Navigation__Link Navigation__Home'>
              Home
            </Link>
            <Link to="/about" className='Navigation__Link'>
              About
            </Link>
            <Link to="/blog" className='Navigation__Link'>
              Blog
            </Link>
            <Link to="/projects" className='Navigation__Link'>
              Projects
            </Link>
            <a href="www.github.com" target='_blank' className='Navigation__Link Navigation__Github'>
              Github
              <svg className='Navigation__OpenTabIcon' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="18px" fill="#4f5969"><path d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </a>
        </ul>
      </div>
      {<button onClick={() => onUpdateTheme(!isDark)} className='Navigation__Toggle'/>}
    </nav>
  );
};

export default Navigation;