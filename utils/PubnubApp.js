import { PUBNUB_CONFIG } from '../config/config'

export function initialize() {
  const pubnubApp = new PubNub(PUBNUB_CONFIG)

  pubnubApp.subscribe({
    channels: ['demo_tutorial']
  })

  // Subscribe to the demo_tutorial channel
  pubnubApp.addListener({
    message: function(message) {
        console.log(message)
    }
  })

  return pubnubApp
}
