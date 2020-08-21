import React ,{Component} from 'react';
import Menu from './Menu';
import DishDetails from './DishDetail';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Aboutus from './Aboutus'
import {connect} from 'react-redux';

import Contact from './Contact';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom'

class Main extends Component {
 
  render() {
    const HomePage =()=>{
      return(
        <Home 
        dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
        promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}
        leader={this.props.leaders.filter((leader)=> leader.featured)[0]}


        />
      )
    }
   const DishWithId =({match})=>{
      return(
        <DishDetails dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
   }
   const About = () =>{
     return(
       <Aboutus leaders ={this.props.leaders} />
     )
   }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={About} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
         <Route  path="/menu/:dishId" component={DishWithId}/>
          <Redirect to="/home" />

             </Switch>

            <Footer />
        </div>
    );
  }
 
}
const mapStateToProps = state =>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    leaders:state.leaders,
    promotions:state.promotions
  }
}
export default withRouter(connect(mapStateToProps)(Main));