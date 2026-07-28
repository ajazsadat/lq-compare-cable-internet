import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Montserrat } from 'next/font/google';
import styles from './independent-support.module.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-ish-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-ish-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Independent Support Help | LQcomparecableinternet',
  description:
    'Independent support-routing help. Speak with a human agent or use the automated support line. Not affiliated with any carrier.',
};

const PHONE_DISPLAY = '888-959-4513';
const PHONE_TEL = 'tel:8889594513';

function PhoneButton() {
  return (
    <span className={styles.phoneBtn}>
      <svg className={styles.phoneIcon} viewBox="0 0 50 50" fill="currentColor" aria-hidden="true">
        <path d="M14.2 3.5c1-.4 2.1 0 2.7.9l3.3 5.2c.6.9.5 2.1-.2 2.9l-2.2 2.4c-.3.3-.3.8 0 1.2 1.5 2.4 3.5 4.5 5.9 6.1.4.3.9.2 1.2-.1l2.5-2.1c.8-.7 2-.8 2.9-.2l5.3 3.2c.9.6 1.3 1.7.9 2.7l-1.8 4.3c-.4 1-1.4 1.6-2.5 1.5C19.3 30.6 8.1 19.5 7.2 6.6c-.1-1.1.5-2.1 1.5-2.5l5.5-.6z" />
        <path
          d="M30.5 6.5c6.2 1.4 11.1 6.3 12.5 12.5M30.5 13c3.7 1 6.6 3.9 7.6 7.6M30.5 19.2c1.5.5 2.7 1.7 3.2 3.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.phoneNumber}>{PHONE_DISPLAY}</span>
    </span>
  );
}

export default function IndependentSupportHelpPage() {
  return (
    <div className={`${poppins.variable} ${montserrat.variable}`}>
      <div className={styles.page}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>
            How would you like to connect for{' '}
            <span className={styles.headingAccent}>Internet Services and Assistance?</span>
          </h1>

          <Image
            src="/images/live-agent-ref/accent.png"
            alt=""
            width={113}
            height={9}
            className={styles.accentBar}
          />

          <div className={styles.cards}>
            <a href={PHONE_TEL} className={`${styles.card} ${styles.cardHuman}`}>
              <Image
                src="/images/live-agent-ref/human.png"
                alt=""
                width={218}
                height={216}
                className={styles.cardIcon}
              />
              <h2 className={styles.cardTitle}>Speak With A Human Agent</h2>
              <hr className={styles.divider} />
              <PhoneButton />
            </a>

            <a href={PHONE_TEL} className={`${styles.card} ${styles.cardAuto}`}>
              <Image
                src="/images/live-agent-ref/auto.png"
                alt=""
                width={119}
                height={119}
                className={styles.cardIcon}
              />
              <h2 className={styles.cardTitle}>Automated Support Line</h2>
              <hr className={styles.divider} />
              <PhoneButton />
            </a>
          </div>

          <Link href="/" className={styles.brandLogo}>
            <Image
              src="/images/logo.png"
              alt="LQcomparecableinternet logo"
              width={120}
              height={120}
              className={styles.brandLogoImg}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
