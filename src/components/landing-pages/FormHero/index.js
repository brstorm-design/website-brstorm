import React, { useState } from 'react';
import TextInput from 'src/components/contact/form/TextInput';
import styles from './FormHero.module.scss';
import Arrow from 'public/images/arrow-forward.svg';
import Illustration from 'public/images/landing-pages/web/b/web-dev-illust.svg';
import { useRouter } from 'next/router';
import WebDevelopment from 'src/components/illustrations/WebDevelopment';

export default function FormHero({ overline, title, showForm }) {
  const initialValues = {
    name: '',
    email: '',
  }

  const router = useRouter();
  const [values, setValues] = useState(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = values;

    router.push(`/form/contact?name=${name}&email=${email}`);
  }

  return (
    <div className={styles.section} id="form-cover">
      <div className={styles.illust}>
        <WebDevelopment />
      </div>
      <div className="container">
        <div className="row flex-nowrap">
          <div className="col-12 col-md-5">
            <div className={styles.formSection}>
              <p className="overline gradient-bg">Tudo em um Único Lugar</p>
              <h1>
                Quem não é visto, {'\n'}
                não é lembrado!
              </h1>
              <p>
                Criamos websites marcantes feitos {'\n'}
                para <strong>gerar resultados para seu negócio</strong>. {'\n'}
                Que tal começar seu projeto agora mesmo? {'\n'}
              </p>
              {
                showForm && (
                  <form onSubmit={handleSubmit}>
                    <TextInput
                      baseHeight={48}
                      formValues={values}
                      setFormValue={setValues}
                      name={Object.keys(initialValues)[0]}
                      placeholder="Nome"
                      required
                      style={{ padding: '13px 16px', fontSize: '14px' }}
                    />
                    <TextInput
                      baseHeight={48}
                      formValues={values}
                      setFormValue={setValues}
                      name={Object.keys(initialValues)[1]}
                      placeholder="E-mail para Contato"
                      required
                      style={{ padding: '13px 16px', fontSize: '14px' }}
                    />
                    <button type="submit" className="btn">
                      Começar Projeto
                      <Arrow />
                    </button>
                  </form>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
