import * as React from "react";
import Cta from "./cta";
import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Menu",
    url: "#",
  },
  {
    label: "Delivery & Collection",
    url: "#",
  },
  {
    label: "A Celebration of Flavour",
    url: "#",
  },
  {
    label: "E-gifts",
    url: "#",
  },
  {
    label: "Christmas",
    url: "#",
  },
  {
    label: "Working with us",
    url: "#",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <a className="navbar-item" href={link.url}>
      <span>{link.label}</span>
    </a>
  ));

  return (
    <>
      <header className="h-30 bg-secondary-btn-bg-color">
        <nav className="relative px-2 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <img
              src="https://avrasys.hu/logoipsum-logo-54.svg"
              alt="Tailwindcss Navigation"
            />
            <ul className="hidden md:flex space-x-6 ">
              <li>
                <a href="#" className="hover:text-header-cta-bg-color">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-header-cta-bg-color">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-header-cta-bg-color">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
