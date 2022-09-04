import React, { useEffect, useRef } from 'react';
import styles from './WhatsAppFixed.module.scss';
import WhatsAppIcon from 'public/images/socials/whatsapp.svg';
import ArrowIcon from 'public/images/arrow-forward.svg';

export default function WhatsAppFixed() {
  const whatsRef = useRef(null);

  useEffect(() => {
    whatsRef.current.querySelectorAll('*').forEach(el => el.classList.add('whatsapp-button'));
  }, []);

  return (
    <div className={`whatsapp-button ${styles.button}`} ref={whatsRef}>
      <a className={styles.iconButton} href="https://api.whatsapp.com/send?phone=5551989836186&text=Este%20%C3%A9%20o%20WhatsApp%20da%20Br.Storm,%20deixe%20sua%20d%C3%BAvida%20que%20j%C3%A1%20vamos%20te%20responder.">
        <WhatsAppIcon />
      </a>
      <div className={styles.cta}>
        <a href="https://api.whatsapp.com/send?phone=5551989836186&text=Este%20%C3%A9%20o%20WhatsApp%20da%20Br.Storm,%20deixe%20sua%20d%C3%BAvida%20que%20j%C3%A1%20vamos%20te%20responder.">
          <strong>Chame no WhatsApp</strong>
          <p className="details">Estamos à disposição para <br /> sanar qualquer dúvida.</p>
          <div>
            <p>Fale Conosco</p>
            <ArrowIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
