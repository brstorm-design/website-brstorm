import Link from 'next/link';
import React, { useEffect } from 'react';
import FilledFields from 'src/components/form/form-page/FilledFields';
import FormNav from 'src/components/form/form-page/FormNav';
import { inOutQuad } from 'src/utils/easings';
import Logo from '../../components/common/Logo';
import styles from './Header.module.scss';

export default function Header({ variant, ...props }) {

  switch (variant) {
    case 'form': {
      var { values, activeField } = props;
      break;
    }
    case 'success': {
      var { tres, quatro } = props;
      break;
    }
    case 'default': {
      var { common, content } = props;
      break;
    }
  }

  let variants = {
    default: {
      mainNav: true,
      cta: true,
      formNav: false,
      filledFields: false,
    },
    form: {
      mainNav: false,
      cta: false,
      formNav: true,
      filledFields: true,
    },
    success: {
      mainNav: false,
      cta: false,
      formNav: false,
      filledFields: false,
    },
  };

  const variantData = variants[variant];

  useEffect(() => {
    const header = document.querySelector('header');
    window.onscroll = () => {
      if (window.pageYOffset > 24) {
        header.classList.add(styles.shrink);
      }
      else {
        header.classList.remove(styles.shrink);
      }
    }
  }, [])

  function startAnimation(e) {
    let stop = false;

    let doc = document.documentElement;
    let startx = doc.scrollTop;
    let destx = document.querySelector(e.target.hash).offsetTop - 150;
    let duration = 1800;
    let start = null;
    let end = null;

    function trigger(timeStamp) {
      start = timeStamp;
      end = start + duration;
      draw(timeStamp);
    }

    function draw(now) {
      if (stop) return;
      if (now - start >= duration) stop = true;
      let p = (now - start) / duration;
      let val = inOutQuad(p);
      let x = startx + (destx - startx) * val;
      window.scrollTo(0, x);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(trigger);
  }

  return (
    <header className={styles.header} id="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/" className={styles.logo}>
            <a style={{ flex: variant === 'default' ? 'initial' : '1' }}>
              <Logo />
            </a>
          </Link>

          { // fazer componente disso:
            variant === 'default' && (
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  {
                    content.items.map((link, index) => {
                      return (
                        <li className="nav-item" key={`link-${index}`}>
                          <Link href={link.href}>
                            <a onClick={startAnimation} className="nav-link">{link.name}</a>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          }
          {variant === 'form' && <FilledFields values={values} />}

          { // fazer componente disso:
            variant === 'default' && (
              <a href="https://calendly.com/br-storm/presentation" target="_blank" rel="noopener noreferrer" className="btn small">
                {common.bookMeeting}
              </a>
            )
          }
          {variant === 'form' && <FormNav activeField={activeField} />}
        </div>
      </nav>
    </header>
  )
}