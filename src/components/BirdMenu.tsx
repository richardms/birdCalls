import * as _ from 'lodash'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Bird } from './Bird'

import { birdList } from '../BirdInfo'

export interface Props {
  setBird: (bird: Bird) => void
}

interface State {}

export class BirdMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {}

  public render(): JSX.Element {
    return (
      <Container fluid>
        <Row xs={2} sm={3} md={4} lg={6} xl={8} className="g-4">
          {_.map(birdList, bird => {
            return (
              <Col key={_.kebabCase(bird.name) + '1'}>
                <Bird bird={bird} setBird={this.props.setBird} />
              </Col>
            )
          })}
        </Row>
        <p>
          <br />
          <br />
          <br />
        </p>
      </Container>
    )
  }
}
