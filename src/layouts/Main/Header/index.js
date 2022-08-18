import React, { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import FilledFields from 'src/components/contact/form/FilledFields';
import FormNav from 'src/components/contact/form/FormNav';
import { inOutQuad } from 'src/utils/easings';
import Logo from '../../../components/common/Logo';
import styles from './Header.module.scss';
import { SmoothScrollContext } from 'src/contexts/SmoothScrollContext';

export default function Header({ variant = 'default', ...props }) {
  const fixedHeader = useRef(null);
  let showComponent;

  /* let content = {
    "items": [
      {
        "name": "Propósito",
        "href": "/#purpose"
      },
      {
        "name": "O que fazemos",
        "href": "/#what-we-do"
      },
      {
        "name": "Projetos & Depoimentos",
        "href": "/#projects"
      },
      {
        "name": "Por que Nós",
        "href": "/#why-us"
      },
      {
        "name": "Entre em Contato",
        "href": "/#contact"
      }
    ]
  };
  let common = {
    "bookMeeting": "Começar um Projeto",
    "bookMeetingNow": "Começar um Projeto",
    "bookAppointment": "Começar um Projeto",
    "seeMore": "Ver Mais",
    "seeMoreProjects": "Ver Mais Projetos",
    "contactUs": "Entre em Contato",
    "scrollToTop": "Voltar ao topo",
    "seeHow": "Veja Como"
  }; */

  switch (variant) {
    case 'form': {
      var { values, activeField } = props;
      showComponent = {
        mainNav: false,
        cta: false,
        formNav: true,
        filledFields: true,
      }
      break;
    }
    case 'success': {
      var { tres, quatro } = props;
      showComponent = {
        mainNav: false,
        cta: false,
        formNav: false,
        filledFields: false,
      }
      break;
    }
    case 'default': {
      var { common, content } = props;
      showComponent = {
        mainNav: true,
        cta: true,
        formNav: false,
        filledFields: false,
      }
      break;
    }
  }

  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    function handleScroll(e) {
      if (e.scroll.y > 24) {
        fixedHeader.current.classList.add(styles.shrink);
      } else {
        fixedHeader.current.classList.remove(styles.shrink);
      }
    }

    scroll?.on('scroll', handleScroll);

    return () => {
      scroll?.off('scroll', handleScroll);
    }
  }, [scroll]);

  return (
    <header ref={fixedHeader} className={styles.header} id="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/" className={styles.logo}>
            <a style={{ flex: variant === 'default' ? 'initial' : '1' }}>
              <Logo />
            </a>
          </Link>

          { // fazer componente disso:
            showComponent.mainNav && (
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  {
                    content.items.map((link, index) => {
                      return (
                        <li className="nav-item" key={`link-${index}`}>
                          <Link href={link.href} scroll={false}>
                            <a className="nav-link small">{link.name}</a>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          }
          {
            showComponent.filledFields && <FilledFields values={values} />
          }

          { // fazer componente disso:
            showComponent.cta && (
              <Link href="/form/contact">
                <a rel="noopener noreferrer" className="btn small">
                  {common.bookMeeting}
                </a>
              </Link>
            )
          }
          {
            showComponent.formNav && <FormNav activeField={activeField} />
          }
        </div>
      </nav>
    </header>
  )
}