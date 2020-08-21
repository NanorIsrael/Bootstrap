import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';


   function DisplayComments({comments}) {
    console.log(comments)

        if (comments != null) {

            return (  
                
                <div className="col-12 col-md-5 m-1">  
                
                <Card>
                    <CardBody>
                        <CardTitle><h4>Comments</h4></CardTitle>
                        <ul className="list-unstyled">
                        {/* <CardText> */}
                        {comments.map((comment) =>
               { return(
                    <li key={comment.id}  >
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'})
                        .format(new Date(Date.parse(comment.date)))}</p>
                    </li>

                )}
            )} 
                {/* </CardText> */}
                        </ul>
                    </CardBody>
                </Card>
                </div>
                
            );
            
        }
        else{
            return(<div></div>)
        }
    }

    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 ">
            <Card>
                <CardImg width="100%"  src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>

            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
    const DishDetail =(props )=>{
        // console.log(props)
        return (
            <div className="container">
                <div className="row">
              <Breadcrumb>
              <BreadcrumbItem><Link to='/home'> Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to='/menu'> Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active> {props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Menu</h3>
                  <hr/>
              </div>
            </div>
                <div className="row row-content mt-1">

                    <RenderDish dish={props.dish}/>

                    <DisplayComments comments={props.comments}/>
                </div>
            </div>
            
        )
    
        }

export default DishDetail;