import React from 'react'
import AddLogForm from './Logform'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';


const UserCard = props => {

    return (
        <div className="user-card">
            <div>
            <Card>
                <CardBody>
                    <CardTitle>Happy Fishing!</CardTitle>
                    <CardSubtitle>{props.newUser}</CardSubtitle>
                    </CardBody>
                        <img width="50%" src="/fishpic.jpg" alt="big fish" />
                    <CardBody>
                    <CardText>Add a new Log: {props.AddLogForm}</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
            </div>
            <AddLogForm />
        </div>
    )
}

export default UserCard;