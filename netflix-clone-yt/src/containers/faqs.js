import React,{useState} from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';
import SignUp from '../components/signup/SignUp';



export function FaqsContainer() {
  const [signIn, SetSignIn] = useState(false);
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        
        {/* <OptForm.Button>GET STARTED</OptForm.Button> */}
      
        {
        signIn ? (
          <SignUp/>
        ) : (
        <button  onClick={() => SetSignIn(true)} >Get Started</button>
        )}
        <OptForm.Break />
        
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}