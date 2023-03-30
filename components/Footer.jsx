import css from '../styles/Footer.module.css';
import { UilFacebook } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';

import Image from 'next/image';
import Logo from '../assets/logo.png';
export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45} />
        <UilGithub size={45} />
        <UilInstagram size={45} />
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>DOMINIO PIZZA</span>
      </div>
    </div>
  );
}
