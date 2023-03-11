import React from 'react';

const Footer = () => {
  return (
    <div className="clearfix">
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} GOVIND
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
