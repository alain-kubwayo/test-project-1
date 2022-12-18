import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-body">
      <Head>
        <title>Test Project | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere eum animi. Porro quis corrupti quo quasi eum atque, perspiciatis non ab aliquam ex, id cum commodi quibusdam, velit molestiae.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime consequatur ducimus at totam eligendi, modi omnis praesentium, deserunt officiis dolorum possimus numquam id expedita atque nemo blanditiis illo ea.</p>
      <Link href="/ninjas">ALL NINJAS</Link>
    </div>
  )
}
