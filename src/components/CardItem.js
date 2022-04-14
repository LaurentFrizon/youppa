import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class CardItem extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    if(this.props.type === "comments") {
      let comments = this.props?.dishSelected?.comments?.map((comment) => {
        <CardText>{comment}</CardText>
      })
      return (
        <Card>
            <CardImg top src={this.props?.dishSelected?.image} alt={this.props?.dishSelected?.name} />
          <CardBody>
            <CardTitle>{this.props?.dishSelected?.name}</CardTitle>
            {comments}
          </CardBody>
      </Card>
      )
    } else {
      return (
        <Card>
          <CardImg top src={this.props?.dishSelected?.image} alt={this.props?.dishSelected?.name} />
          <CardBody>
            <CardTitle>{this.props?.dishSelected?.name}</CardTitle>
            <CardText>{this.props?.dishSelected?.description}</CardText>
          </CardBody>
        </Card>
      )
    }
  }
}

export default CardItem;