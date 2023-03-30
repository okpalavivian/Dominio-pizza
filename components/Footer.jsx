import css from '../styles/Footer.module.css';
import { UilFacebook } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
export default function Footer() {
  return (
    <div className={css.contianer}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45} />
        <UilGithub size={45} />
        <UilInstagram size={45} />
      </div>
    </div>
  );
}
