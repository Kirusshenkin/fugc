import React, {useState} from 'react'
import {Col} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import FormCheck from 'react-bootstrap/FormCheck'
// import FormCheck from 'react-bootstrap/FormCheck'


export default function FormExample(props) {
    // console.log(props)
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
            event.preventDefault();
            console.log('handleSubmit')
            // event.stopPropagation();
        // }
        props.onCreated(event.target.elements)
        // console.log(event.target.elements.firstName.value)
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group as={Col} md="4" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <InputGroup>
                <Form.Control
                type="text"
                placeholder="Phone"
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Please choose a phone.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="email">
            <Form.Label>Email</Form.Label>
            <InputGroup>
                <Form.Control
                type="text"
                placeholder="email"
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Please choose a email.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        </Form.Row>
        <Button type="submit">Submit form</Button>
        </Form>
    );
    }

// render(<FormExample />);