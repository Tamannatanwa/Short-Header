import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropDrownMenu = ["Default Header","Typed Text Header","Moving BG Image","Header","Short Header"]

const DropDrownMenu1 = ["Menus","Headers","Features","Progress Bars","Sliders & Galleries","Clients &","Testimonials","Table & Forms","Footers"]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const show = () => {
    setToggle(!toggle);
  };
  const DropDrown = () => {
    setOpen(false);
    setIsOpen(!isopen);
  };
  const DropMenu = () => {
    setIsOpen(false);
    setOpen(!open);
  };
  return (
    <>
      <nav className={!toggle ? "nav" : "nav1"}>
        <div className="div1">
          <a href="https://www.meesho.com/" target="_blank">
            <img
              src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
              alt="Logo"
              className="logo"
            />
          </a>
          <div>
            <h1>PortfolioM4</h1>
          </div>
        </div>
        <div className="material-ui-menuicon">
          {/* <MenuIcon style={{ fontSize: '50px' ,color:"white"}} onClick={()=>{setToggle(!toggle)}}/> */}
          <li className="list">
            <div>
              {!toggle && <MenuIcon className="menuIcon" onClick={show} />}
              {toggle && (
                <div className="DropMenu">
                  <CloseIcon
                    style={{
                      fontSize: "50px",
                      marginLeft: "8rem",
                      marginTop: "-2rem",
                    }}
                    onClick={() => {
                      setToggle(false);
                    }}
                  />
                  <div className="div1">
                    <a href="https://www.meesho.com/" target="_blank">
                      <img
                        src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
                        alt="Logo"
                        className="logo1"
                      />
                    </a>
                    <div>
                      <h1>PortfolioM4</h1>
                    </div>
                  </div>
                  <ul>
                    <li className="listItem">PortfolioM4 theme</li>
                    <li className="listItem">Watch Video</li>
                    <li onClick={DropDrown}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <li className="listItem">Pages</li>
                        <ArrowDropDownIcon />
                      </div>
                    </li>
                    {isopen && (
                      <ul className="ul">
                      {
                        DropDrownMenu.map((ele)=>{
                          return (
                            <>
                            <div key={ele} className="menuItem">
                              <li>{ele}</li>
                            </div>
                            </>
                          )
                        })
                      }
                      </ul>
                    )}
                    <li className="listItem" onClick={DropMenu}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <li className="listItem">Blocks</li>
                        <ArrowDropDownIcon />
                      </div>
                    </li>
                    {open && (
                      <ul className="ul">
                      {
                        DropDrownMenu1.map((ele)=>{
                          return (
                            <>
                            <div key={ele} className="menuItem">
                              <li>{ele}</li>
                            </div>
                            </>
                          )
                        })
                      }
                      </ul>
                    )}
                  </ul>
                  <button className="buybutton">BUY NOW</button>
                </div>
              )}
            </div>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
