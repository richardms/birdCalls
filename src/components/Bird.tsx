import _ from 'lodash'
import * as React from 'react'
import { Card, Container, Row, Modal } from 'react-bootstrap'
import { BirdInfo } from '../BirdInfo'

export interface Props {
  bird: BirdInfo
  setBird: (bird: Bird) => void
}

interface State {}

export class Bird extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {}

  handleClick() {
    this.props.setBird(this)
  }

  getSample() {
    const bird = this.props.bird
    if (bird.sample) {
      return bird.sample
    } else {
      return `https://www.xeno-canto.org/${bird.xc}/download`
    }
  }

  getIcon() {
    const bird = this.props.bird
    if (bird.icon) {
      return bird.icon
    } else {
      const nm = bird.rspb_icon || _.kebabCase(_.toLower(bird.name))
      return `https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/bird-species-illustrations/${nm}_1200x675.jpg?preset=square_desktop`
    }
  }

  getAudio() {
    const bird = this.props.bird
    return {
      name: bird.name,
      cover: this.getIcon(),
      musicSrc: this.getSample(),
    }
  }

  public render(): JSX.Element {
    return (
      <Card onClick={this.handleClick}>
        <Card.Img variant="top" src={this.getIcon()} />
        <Card.Body>
          <Card.Title>
            <h3>{this.props.bird.name}</h3>
          </Card.Title>
        </Card.Body>
      </Card>
    )
  }
}
