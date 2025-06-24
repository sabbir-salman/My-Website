import React, { useState } from 'react';
import style from './NavBar.module.css';
import { Dropdown } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

export const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link); // Close dropdown when a link is clicked
  };

  const moreItems = [
    {
      key: 'achievements',
      label: <a href="#achievements">Achievements</a>,
    },
    {
      key: 'contact',
      label: <a href="#contact">Contact</a>,
    },
    {
      key: 'blog',
      label: <a href="#blog">Blog</a>,
    },
  ];

  return (
    <nav className={`${style.navBar} container`}>
      <div className="logo">
        <img src="/images/Logo.svg" alt="logo" />
      </div>



      <ul className={style.navLinks}>
        <li>
          <a
            href="#home"
            onClick={() => setActiveLink('home')}
            className={activeLink === 'home' ? style.active : ''}
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => setActiveLink('projects')}
            className={activeLink === 'projects' ? style.active : ''}>

            Projects
          </a>
        </li>

        <li>
          <a
            href="#skills"
            onClick={() => setActiveLink('skills')}
            className={activeLink === 'skills' ? style.active : ''}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#experience"
            onClick={() => setActiveLink('experience')}
            className={activeLink === 'experience' ? style.active : ''}
          >
            Experience
          </a>
        </li>




        <li>
          <Dropdown
            menu={{ items: moreItems }}
            trigger={['click']}
            open={dropdownOpen}
            onOpenChange={(flag) => setDropdownOpen(flag)}
          >
            <a onClick={(e) => e.preventDefault()} className={style.moreDropdown}>
              More {dropdownOpen ? <UpOutlined /> : <DownOutlined />}
            </a>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
