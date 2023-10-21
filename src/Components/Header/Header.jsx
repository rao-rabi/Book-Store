import { useState } from "react";
import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between py-2 md:px-12 shadow-lg relative z-50 px-4">
      <div className="flex justify-normal items-center">
        <a href="/" className="text-cyan-700 font-medium">
          <img src={logo} alt="books" className="w-12 h-12" />
        </a>
      </div>
      <div>
        <ul className="DESKTOP-MENU hidden space-x-4 sm:flex">
          <li>
            <NavLink to="/"
              className={({ isActive }) =>
                `py-1 font-medium ${
                  isActive ? "text-orange-700" : "text-black"
                }`
              }
              
            >
              HOME
            </NavLink>
          </li>
          <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
          <li>
            <NavLink
            to="/about"
              className={({ isActive }) =>
                `py-1 font-medium ${
                  isActive ? "text-orange-700" : "text-black"
                }`
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <hr className="border-slate-400 border-2 w-7 rotate-90 justify-center self-center" />
          <li>
            <NavLink
            to="/contact"
              className={({ isActive }) =>
                `py-1 font-medium ${
                  isActive ? "text-orange-700" : "text-black"
                }`
              }
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
      <section className="flex justify-center items-center space-x-6">
        <div>
          <i
            className="fa-solid fa-cart-shopping fa-bounce fa-lg"
            style={{ color: "#00040a" }}
          ></i>
        </div>
        <div className="MOBILE-MENU flex sm:hidden">
          <div
            className="HAMBURGER-ICON space-y-1.5"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-cyan-700"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-4 py-4"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[150px]">
              <li>
                <NavLink to="/"
                  className={({ isActive }) =>
                    `py-1 font-medium ${
                      isActive ? "text-orange-700" : "text-black"
                    }`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/about"
                  className={({ isActive }) =>
                    `py-1 font-medium ${
                      isActive ? "text-orange-700" : "text-black"
                    }`
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/contact"
                  className={({ isActive }) =>
                    `py-1 font-medium ${
                      isActive ? "text-orange-700" : "text-black"
                    }`
                  }
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
    .hideMenuNav {
        display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
    </div>
  );
}

export default Header;
