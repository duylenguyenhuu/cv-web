import "./styles.scss";

const Header = () => {
  return (
    <div className="header h-16 grid grid-cols-12">
      <div className=" px-6 col-span-2 border-r-2 border-[rgb(231, 235, 238)]">
        <div className="navbar-log">.</div>
      </div>
      <div className="col-span-8">
        <span>duyle</span>
      </div>
      <div className="col-span-1">
        <span>duyle</span>
      </div>
      <div className="col-span-1">nguyen</div>
    </div>
  );
};
export default Header;
