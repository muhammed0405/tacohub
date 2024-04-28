import './footer.scss'
import logo from "../../assets/img/Logo.svg"
const Footer = () => {
	return (
		<div className='footer'>
			<div className="footer__logo">
				<img src={logo} alt="" />
			</div>
			
		</div>
	);
};

export default Footer;