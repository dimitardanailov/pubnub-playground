import React from 'react'

let pubnub

class Page extends React.Component {

  pubnub

  constructor(props) {
    super(props)

    this.handlePublish = this.handlePublish.bind(this)
  }

  componentDidMount() {
    this.pubnub = new PubNub(PUBNUB_CONFIG)

  }

  handlePublish() {
    console.log(this.pubnub)
  }

  render() {
    return (
      <section className="page">
        <div>Hello World</div>

        <button onClick={this.handlePublish}>
          Publish a new message
        </button>
      </section>
    )
  }
}

export default Page


/*
function componentDidMount() {
  pubnub = new PubNub(PUBNUB_CONFIG)
}

function publish() {


  console.log(pubnub)
}

render({children}) (
  return (
  )
}
*/
