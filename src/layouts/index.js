import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import Footer from './Footer';
import Header from './Header';
import './style.scss';
export const Layout = () => {
  return (
    <>
      <Header />
      <main className="container main-wrapper">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
