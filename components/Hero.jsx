import css from '../styles/Hero.module.css';
import Image from 'next/image';
import Cherry from '../assets/Cherry.png';

export default function Hero() {
  return (
    <div className={css.container}>
      {/* left side*/}
      <div className={css.cherry}>
        <span>More than Faster</span>
        <Image src={Cherry} alt="" width={40} height={25} />
      </div>
      {/*right side}


       {/* right side*/}
      <div className={css.rightSide}>1</div>
    </div>
  );
}
