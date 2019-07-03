import Head from 'next/head'

export default function ApplicationHeader() {
  return (
    <Head>
      <title>Pubnub application</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.21.7.min.js"></script>
    </Head>
  )
}
