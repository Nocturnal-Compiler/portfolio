import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactForm>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Message" rows="4" />
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
