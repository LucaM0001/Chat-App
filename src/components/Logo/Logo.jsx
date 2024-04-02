import AppLogo from "../../assets/img/logo.png";

const Logo = (props) => {
  const logoStyle = { width: "60px", height: "60px" };
  return (
    <div className="text-center">
      <img src={AppLogo} alt="logo" style={logoStyle} />
    </div>
  );
};

export default Logo;
