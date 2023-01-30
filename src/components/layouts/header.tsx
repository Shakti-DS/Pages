import * as React from "react";
import Cta from "./cta";
import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";

type props = {
  HeaderLogo: any;
  HeaderLink: any;
};



const Header = (props: any) => {
  const { HeaderLogo, HeaderLink } = props;

  const linkDoms = HeaderLink?.map((HeaderLinks: any) => (
    <a className="navbar-item mr-3 hover:text-header-cta-bg-color" href={HeaderLinks?.url}>
      <span>{HeaderLinks?.label}</span>
    </a>
  ));


  return (
    <>
      <header className="h-30 bg-secondary-btn-bg-color">
        <nav className="relative px-2 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <img
              src={HeaderLogo}
              alt="Tailwindcss Navigation" className="w-20"
            />
            <ul className="hidden md:flex space-x-6 ">
              <li>
                <div>
                  {linkDoms}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
