import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <ul className="menu">
        <li className="menu-item active">
          <HomeIcon /> <span>Home</span>
        </li>
        <li className="menu-item">
          <NotificationsIcon /> <span>Notifications</span>
        </li>
        <li className="menu-item">
          <FavoriteIcon /> <span>Shop</span>
        </li>
        <li className="menu-item">
          <ChatIcon /> <span>Conversation</span>
        </li>
        <li className="menu-item">
          <AccountBalanceWalletIcon /> <span>Wallet</span>
        </li>
        <li className="menu-item">
          <SubscriptionIcon /> <span>Subscription</span>
        </li>
        <li className="menu-item">
          <PersonIcon /> <span>My Profile</span>
        </li>
        <li className="menu-item">
          <SettingsIcon /> <span>Settings</span>
        </li>
        <li className="menu-item logout">
          <LogoutIcon /> <span>Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
