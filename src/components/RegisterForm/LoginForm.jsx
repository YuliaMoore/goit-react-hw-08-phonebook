import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { loginUser } from 'redux/auth/authOperations';
import { Formik, Form, ErrorMessage } from 'formik';
import { Title, Label, TitleInput, Input, Button } from './LoginForm.styled';

const initialState = { email: '', password: '' };

export const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(state));
    setState(initialState);
    navigate('/goit-react-hw-08-phonebook/');
  };
  return (
    <>
      <Title>Login</Title>

      <Formik
      // onSubmit={handleSubmit}
      >
        <Form onSubmit={handleSubmit}>
          <Label>
            <TitleInput>Your e-mail adress?</TitleInput>
            <Input
              type="email"
              name="email"
              required
              placeholder="across@mail.com"
              onChange={handleChange}
              value={state.email}
            />
            <ErrorMessage name="email" component="div" />
          </Label>
          <Label>
            <TitleInput>Password.</TitleInput>
            <Input
              type="password"
              name="password"
              required
              placeholder="examplepwd12345"
              onChange={handleChange}
              value={state.password}
            />
            <ErrorMessage name="password" component="div" />
          </Label>
          <Button type="submit">Sing in</Button>
        </Form>
      </Formik>
    </>
  );
};
