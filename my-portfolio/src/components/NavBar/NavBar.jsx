import React, { useState } from 'react';
import style from './NavBar.module.css';
import { Dropdown } from 'antd';
import { Button } from "antd";
import { DownOutlined, UpOutlined, PhoneFilled, PhoneTwoTone } from '@ant-design/icons';

export const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');


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

        <a href="home">
          <img src="/images/Logo.svg" alt="logo" />
        </a>
      </div>



      <ul className={style.navLinks}>
        <li>
          <a
            href="#about me"
            onClick={() => setActiveLink('about me')}
            className={activeLink === 'about me' ? style.active : ''}
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

        <li>
          <Button className={style.contactButton} size='small'>
            <PhoneFilled />Contact Me
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
