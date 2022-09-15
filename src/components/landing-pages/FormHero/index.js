import React, { useState } from 'react';
import TextInput from 'src/components/contact/form/TextInput';
import styles from './FormHero.module.scss';
import Arrow from 'public/images/arrow-forward.svg';
import Illustration from 'public/images/landing-pages/web/b/web-dev-illust.svg';
import { useRouter } from 'next/router';
import { getQueryString } from 'src/utils/form';

export default function FormHero() {
  const initialValues = {
    'entry.576692421': '', // name
    'entry.1100959596': '', // email
  }

  const router = useRouter();
  const [values, setValues] = useState(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    const queryString = getQueryString(values);

    router.push(`/form/contact?${queryString}#yourContact`);
    /* router.push('/contact/success'); */
  }

  return (
    <div className={styles.section} id="form-cover">
      <Illustration className={styles.illust} />
      <div className="container">
        <div className="row flex-nowrap">
          <div className="col-5">
            <div className={styles.formSection}>
              <p className="overline">Tudo em um Único Lugar</p>
              <h1>
                Quem não é visto, {'\n'}
                não é lembrado!
              </h1>
              <p>
                Criamos websites marcantes feitos {'\n'}
                para <strong>gerar resultados para seu negócio</strong>. {'\n'}
                Que tal começar seu projeto agora mesmo? {'\n'}
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
