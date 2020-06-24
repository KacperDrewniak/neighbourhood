import React, {Component} from 'react'
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap'
import emailjs from 'emailjs-com';
class Contact extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        order: '',
        text: ''
    }




    decimal(n, k = 1) {
        const factor = Math.pow(10, k + 1);
        n = Math.round(Math.round(n * factor) / 10);
        return n / (factor / 10);
    }


    handleSubmit(e) {
        e.preventDefault()
        const {name, email, subject, message, context} = this.state

        const arr = [name, email, subject, message, context]

        let text = ""
        this.props.vegetables.forEach((vegetable, i) => text += `warzywo ${vegetable.title} ,  ilość : ${vegetable.count}`)
        console.log(text)

        arr.forEach((a, i) => {

            if (a === "") {
                alert(`proszę uzupełnić dane`)
            }
        })

        let templateParams = {
            name: name,
            from_name: email,
            to_name: 'warzywnybaron@gmail.com',
            subject: subject,
            message_html: message,
            vegetables: text,
            message: message,
            context: context
        }
        emailjs.send(
            'gmail',
            'template_gi4v6dt3',
            templateParams,
            'user_akoDeoUXzQ1rLnHDYzS4Q'
        )

        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            context: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({[param]: e.target.value})
    }

    render() {


        console.log(this.props)

        return (
            <Container className="form" fluid>
                <Row>
                    <Col><h1 className="p-heading1">Złóż zamówienie:</h1></Col></Row>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formBasicEmail">
                        <Label className="text-muted">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'email')}
                            placeholder="Wpisz Email"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                        <Label className="text-muted">Imię</Label>
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'name')}
                            placeholder="Wpisz Imię"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicSubject">
                        <Label className="text-muted">Adres</Label>
                        <Input
                            type="text"
                            name="subject"
                            className="text-primary"
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this, 'subject')}
                            placeholder="Podaj Adres"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicMessage">
                        <Label className="text-muted">Telefon</Label>
                        <Input
                            type="number"
                            name="message"
                            className="text-primary"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}
                            placeholder="Podaj Telefon"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicMessage">
                        <Label className="text-muted">Wiadomość specialna</Label>
                        <Input
                            type="textarea"
                            name="messages"
                            className="text-primary"
                            value={this.state.context}
                            onChange={this.handleChange.bind(this, 'context')}
                            placeholder="Treść wiadomości"
                        />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Złóż zamówienie
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Contact