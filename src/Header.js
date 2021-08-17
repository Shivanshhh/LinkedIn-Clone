import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
        <div className='header__left'>
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="">
            </img>
        <div className='header__search'>
            <SearchIcon />
            <input type="text"/>
        </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/> 
            <HeaderOption Icon={BusinessCenter} title="Jobs"/> 
            <HeaderOption Icon={ChatIcon} title="Messaging"/> 
            <HeaderOption Icon={NotificationIcon} title="Notifications"/> 
            <HeaderOption avatar="https://scontent.fdel52-1.fna.fbcdn.net/v/t1.6435-9/54799445_2371108976278645_2588517123613523968_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=A_LGiNqu874AX-PBA0d&_nc_ht=scontent.fdel52-1.fna&oh=07d7e7611c3dd503b2d146e84ab5c51c&oe=6140F8F5" title = "me" />
        </div>
        </div>
    );
}

export default Header;
