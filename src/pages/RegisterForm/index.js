import { Form, Button } from "react-bootstrap";
import { useState } from "react";


// {
//     email:'abc@yopmail.com',
//     address:'bkt',
// phoneNu

// }
const RegisterForm = () =>{
const [formData,setFormData] = useState({})
    const handleChange = (e) =>{
        console.log('handleChange')
        console.log(e.target.value,e.target.name)
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState)=>{
            return {
            ...prevState,
            [name]: value

        }
    })
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
console.log('handleSubmit')
console.log(formData)

    }
    return(
        <>
        <p>Register Now</p>
        <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='email' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> address</Form.Label>
        <Form.Control type="text"  name='address' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="1234"  name='phoneNumber' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3}  name='textarea' onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="reset">
        Reset
      </Button>
    </Form>
    </>
    )
}

export default RegisterForm