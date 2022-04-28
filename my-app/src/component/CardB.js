import React from 'react'
import {Card} from 'react-bootstrap'
import PropTypes from 'prop-types'

function CardB(props) {
    const {title,subtitle,text}=props
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> {subtitle}</Card.Subtitle>
    <Card.Text>
      {text}
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
  )
}
  CardB.defaultProps=
{
  subtitle :'default subtitle',
}
CardB.propTypes = {
  title:PropTypes.string
}

export default CardB