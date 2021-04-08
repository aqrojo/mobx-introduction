import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Counter</title>
      </Head>

      <main className='center-content'>
        <ul>
          <li>
            <Link href='/simple-counter'>
              <a>01 - Simple Counter</a>
            </Link>
          </li>
          <li>
            <Link href='/mobx-counter'>
              <a>02 - Mobx Counter</a>
            </Link>
          </li>
          <li>
            <Link href='/simple-todo-list'>
              <a>03 - Simple TODO List</a>
            </Link>
          </li>
          <li>
            <Link href='/mobx-todo-list'>
              <a>04 - Mobx TODO List</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
