import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

function ContactForm() {
    const [firstName, setFirstName] = useState('') // useState to store First Name
    const [lastName, setLastName] = useState('') // useState to store Last Name
    const [email, setEmail] = useState('') // useState to store Email address of the user
    const [description, setDescription] = useState('') // useState to store description


    function resetForm() {
        setFirstName("");
        setLastName("");
        setEmail("");
        setDescription("");
    }

    //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function validateForm(submittedForm) {
        if (firstName.length == 0) {
            alert('Invalid Form, First Name can not be empty')
            return
        }

        if (email.length == 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }

        if (!validateEmail(email)) {
            alert('Invalid Form, Email Address is invalid')
            return
        }

        if (description.length == 0) {
            alert('Invalid Form, Description is invalid')
            return
        }

        resetForm()
        alert('Form is valid')
    }

    return (
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5 rounded">
            <h1 className="text-center font-weight-bold text-primary-color">Contact Me</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name (Optional)</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address to contact you back</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" placeholder="Type your message here" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Form.Text className="text-muted" value="abc">
                    Please enter at least 10 characters.
                </Form.Text>
            </Form.Group>
            <div className="center my-3">
            <Button variant="primary" type="submit" onClick={(e) => validateForm(e)}>
                Submit
            </Button>
            </div>
        </Form>
        </div>
    </div>
  </div>
    );
}

export default ContactForm;