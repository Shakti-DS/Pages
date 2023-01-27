import * as React from "react";
import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";
import pizzaLogo from "../../images/pasta-pizza-vino.png";

var currentTime = new Date();
var year = currentTime.getFullYear();

type Link = {
   label: string;
   url: string;
};

const links: Link[] = [
   {
      label: "Privacy Policy",
      url: "/",
   },
   {
      label: "Copyright/Legal Info",
      url: "/copyright",
   },
];

const Footer = () => {
   const linkDoms = links.map((link) => (
      <div key={link.label}>
         <a href={link.url} target="_blank" rel="noreferrer">
            {link.label}
         </a>
      </div>
   ));

   return (
      <>
        <footer className="footer-1 bg-green-100 py-8 sm:py-12  bg-secondary-btn-bg-color">
           <div className="container mx-auto px-4">
              <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-center">
                 <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                       Features
                    </h5>
                    <ul className="list-none footer-links">
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Cool stuff
                  </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800  hover:text-header-cta-bg-color"
                          >
                             Random feature
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Team feature
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Stuff for developers
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Another one
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Last time
                          </a>
                       </li>
                    </ul>
                 </div>
                 <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color ">
                       Resources
                    </h5>
                    <ul className="list-none footer-links">
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Resource
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Resource name
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Another resource
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Final resource
                          </a>
                       </li>
                    </ul>
                 </div>
                 <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                       About
                    </h5>
                    <ul className="list-none footer-links">
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Team
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Locations
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Privacy
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Terms
                          </a>
                       </li>
                    </ul>
                 </div>
                 <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                       Help
                    </h5>
                    <ul className="list-none footer-links">
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Support
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Help Center
                          </a>
                       </li>
                       <li className="mb-2">
                          <a
                             href="#"
                             className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 hover:text-header-cta-bg-color"
                          >
                             Contact Us
                          </a>
                       </li>
                    </ul>
                 </div>
              </div>
              <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t justify-center">
                 <div className="sm:w-full px-4 md:w-1/6">
                    <strong className="hover:text-header-cta-bg-color">FWR</strong>
                 </div>
                 <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                    <h6 className="font-bold mb-2 hover:text-header-cta-bg-color">
                       Address
                    </h6>
                    <address className="not-italic mb-4 text-sm hover:text-header-cta-bg-color">
                       123 6th St.
                       <br />
                       Melbourne, FL 32904
                    </address>
                 </div>
                 <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                    <h6 className="font-bold mb-2 hover:text-header-cta-bg-color">
                       Free Resources
                    </h6>
                    <p className="mb-4 text-sm hover:text-header-cta-bg-color">
                       Use our HTML blocks for{" "}
                       <strong className="hover:text-header-cta-bg-color">FREE</strong>
                       .<br />
                       <em className="hover:text-header-cta-bg-color">
                          All are MIT License
                       </em>
                    </p>
                 </div>
                 <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                    <button className="px-4 py-2 bg-full-bleed-bg-color  text-black">
                       Get Started
                    </button>
                 </div>
              </div>
           </div>
        </footer>
     </>
  );
};

export default Footer;
