import Head from 'next/head'
import { Mainframe } from 'components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prafull Shelke Resume</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Mainframe />
    </div>
  )
}