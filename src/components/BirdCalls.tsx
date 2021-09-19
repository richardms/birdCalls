import * as React from 'react'

import { BirdMenu } from './BirdMenu'

import { Card, Container, Row, Modal } from 'react-bootstrap'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { Bird } from './Bird'

export interface Props {}

interface State {
  audioLists: any[]
}

export class BirdCalls extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      audioLists: [],
    }

    this.setBird = this.setBird.bind(this)
  }

  componentDidMount() {}

  public setBird(bird: Bird) {
    this.setState({
      audioLists: [bird.getAudio()],
    })
  }

  public render(): JSX.Element {
    return (
      <Container fluid>
        <ReactJkMusicPlayer
          mode="full"
          quietUpdate={false}
          clearPriorAudioLists
          audioLists={this.state.audioLists}
          showDestroy={false}
          showDownload={false}
          showLyric={false}
          showMiniModeCover={false}
          showThemeSwitch={false}
          showMediaSession={false}
          showPlayMode={false}
          showReload={false}
          responsive={false}
        />
        <BirdMenu setBird={this.setBird} />
      </Container>
    )
  }
}
