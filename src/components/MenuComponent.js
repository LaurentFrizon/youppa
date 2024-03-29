import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }
  
    render() {
        const menu = this.props.dishes.map((dish, index) => {
            return (
              <div key={index} className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.props.clickOnDish(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    { menu }
                </div>
            </div>
        );
    }
}

export default Menu;