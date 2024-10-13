import Image from "next/image";
import logo from "../../assets/lost--found-high-resolution-logo-transparent.png";
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <Image src={logo} alt="logo" width={100} height={100} />
        <p>
          Lost & Found Items.
          <br />
          Providing reliable tech since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-[#239FA4]">Services</h6>
        <a className="link link-hover">Found Item</a>
        <a className="link link-hover">Lost Item</a>
        <a className="link link-hover">Claim Item</a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#239FA4]">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Lost Item</a>
        <a className="link link-hover">Found Item</a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#239FA4]">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
