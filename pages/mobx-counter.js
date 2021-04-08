import React from 'react'
import Head from 'next/head'
import CounterMBX from '../components/conunter/CounterMBX'

export default function MobxCounter() {
  return (
    <div className='container'>
      <Head>
        <title>Counter</title>
      </Head>

      <main className='center-content'>
        <CounterMBX />
      </main>
    </div>
  )
}
