import React from 'react'
import Head from 'next/head'
import Counter from '../components/conunter/Counter'

export default function SimpleCounter() {
  return (
    <div className='container'>
      <Head>
        <title>Counter</title>
      </Head>

      <main className='center-content'>
        <Counter />
      </main>
    </div>
  )
}
