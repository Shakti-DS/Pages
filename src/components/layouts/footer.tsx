import * as React from "react";

type data = {
   abouts: any;
   menu: any;
   ourServices: any;
   resources: any;
};

const Footer = (data: any) => {
   const { abouts, menu, ourServices, resources } = data;
   // console.log("about", abouts);
   return (
      <>
         <footer className="footer-1 bg-green-100 py-8 sm:py-12  bg-secondary-btn-bg-color">
            <div className="container mx-auto px-4">
               <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-center">
                  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                     {abouts?.map((about: any) => {
                        return (
                           <>
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                                 {about.label}
                    </h5>
                           </>
                        );
                     })}

                     {/* <ul className="list-none footer-links">
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
                    </ul> */}
                 </div>
                 <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                     {resources?.map((resource: any) => {
                        return (
                           <>
                              <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                                 {resource.label}
                    </h5>
                           </>
                        );
                     })}
                 </div>
                 <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                     {ourServices?.map((ourService: any) => {
                        return (
                           <>
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                                 {ourService.label}
                    </h5>
                           </>
                        );
                     })}
                 </div>
                 <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                     {menu?.map((menus: any) => {
                        return (
                           <>
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                                 {menus.label}
                    </h5>
                           </>
                        );
                     })}
                 </div>
              </div>
               {/* <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t justify-center">
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
              </div> */}
           </div>
        </footer>
     </>
  );
};

export default Footer;
