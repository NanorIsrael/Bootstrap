import React, { Component } from 'react';
import { Jumbotron, Collapse, NavbarToggler, ModalBody, Button, FormFeedback, FormGroup, Label, Input ,Form} from 'reactstrap';
import {Navbar,NavbarBrand,NavItem,Nav,Modal,ModalHeader} from 'reactstrap'
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            isNavOpen : false,
            isModalOpen : false

        }
    }
    toggleNav=()=>{
        this.setState({isNavOpen:! this.state.isNavOpen})
    }
    toggleModal=()=>{
        this.setState({isModalOpen: !this.state.isModalOpen})
    }
    handLogin=(evt)=>{
        this.toggleModal();
        alert("username: "+this.username.value)
        this.preventDefault();
    }
    render(){
        return(
            <>
            
            <Navbar dark expand="md">
                
             <NavbarBrand className="mr-auto" href='#' >
                <img src="assets/images/logo.png" height="30" width="41"
                    alt=" Ristorante con Fusion" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />

            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav  navbar>
                    <NavItem >
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"> Home</span>
                        </NavLink>                       
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg"> Menu</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                            <span className="fa fa-info fa-lg"> About Us</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address-card  fa-lg"> Contact Us</span>
                        </NavLink>
                    </NavItem> 
                </Nav>
                <Nav className='ml-auto'>
                    <NavItem>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign">Login</span></Button>
                    </NavItem>
                </Nav>
            </Collapse>
               
    </Navbar>
            
                

            <Jumbotron>
                <div className="container ">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines,and create a unique fusion experience.Our lipsmacking will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody className="ModalBody">
                    <Form onSubmit={this.handLogin}>
                        <FormGroup>
                            <Label htmlFor="username"> Username</Label>
                            <Input type="text" id="username" name="username" 
                            placeholder="username" innerRef={(input)=> this.username =input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password"> Password</Label>
                            <Input type="password" id="password" name="password" placeholder=""/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check> 
                            <Input type="checkbox" id="remember" name="remember"/>
                            Remember me
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button className="bg-primary" type="submit" value="submit">Sign in</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
}
export default Header;