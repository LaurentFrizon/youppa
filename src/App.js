import './App.css';
import Menu from './components/MenuComponent';
import CardItem from './components/CardItem';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      dishes:DISHES,
      dishSelected: {
        category: "",
        comments: [],
        description: "",
        id: null,
        image: "",
        label: "",
        name: "",
        price: ""
      },
    }
  }

  clickOnDish = (dishClicked) => {
    this.setState({dishSelected: dishClicked})
    
    console.log(this.state.dishes);
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} clickOnDish={this.clickOnDish}/>
        <CardItem dishSelected={this.state.dishSelected} type="card"/>
        <CardItem dishSelected={this.state.dishSelected} type="comments"/>
      </div>
    );
  }
}

export default App;
