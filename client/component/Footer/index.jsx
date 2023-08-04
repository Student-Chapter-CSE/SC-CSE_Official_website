import styles from '../../styles/Footer.module.css';
import {FaYoutube,FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
const Footer = () => {
    return (<footer>
        <div className={styles.Bg_details}>
            <div className={styles.FooterWrap}>
            <div className={styles.Col1}>
            Mail us at:<br/>sccse.aot@gmail.com
            </div> 
            <div className={styles.Footer_Anchor} >
              <div className={styles.Col2}>
                <a href="https://www.facebook.com/sccseaot"><FaFacebook className="icons facebook"/>  </a>
                <a href="https://twitter.com/ieiaot"><FaTwitter className="icons twitter"/>  </a>
                <a href="https://www.instagram.com/sccse_aot/"><FaInstagram className="icons instagram"/>  </a>
                <a href="https://www.youtube.com/channel/UCFvgz8LpzW5Vv9wSJWPpypQ"><FaYoutube className="icons youtube"/>  </a>
                <a href="https://www.linkedin.com/company/sccseaot/about/"><FaLinkedin className="icons linkedin"/>  </a>
              </div>
            </div>
            </div>
          <div className={styles.FooterText}>
            © {new Date().getFullYear()} Official Website of Student's Chapter CSE of AOT.
          </div>
        </div>
        
      </footer>) 
};

export default Footer;
