import React from 'react'
import { initialize } from '../../utils/PubnubApp'

class Page extends React.Component {

  constructor(props) {
    super(props)

    this.handlePublish = this.handlePublish.bind(this)
  }

  handlePublish() {
    const pubnubApp = initialize()

    // Publish a simple message to the demo_tutorial channel
    pubnubApp.publish({
      message: {
        color: 'blue'
      },
      channel: 'demo_tutorial'
    })
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
