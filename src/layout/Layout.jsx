import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from "@/components";

const Layout = () => {
  return (
    <main className={`min-h-screen w-screen flex flex-col`} >
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout