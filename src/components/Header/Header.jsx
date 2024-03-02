import cls from "./Header.module.css";
import logo from "../../assets/icons/Logo.svg";

export default function Header() {
  return (
    <div className={cls.header}>
      <img src={logo} alt="" />
    </div>
  );
}
