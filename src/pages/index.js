import Head from 'next/head';
import data from '../../public/content.json';
import Link from 'next/link';

export default function Home(props) {
  const clients = props.clients;

  return (
    <>
      <Head>
        <title>Pithces</title>
      </Head>

      <h1>Pithces</h1>
      <ul>
      {
        clients.map(client => {
          return (
            <li key={`${client.name}_${client.id}`}>
              <Link href={`/pitch/${client.name}-${client.id}`}>
                <a>{client.name}</a>
              </Link>
            </li>
          )
        })
      }
      </ul>
    </>
  )
}



export async function getStaticProps() {
  return {
    props: data
  }
}