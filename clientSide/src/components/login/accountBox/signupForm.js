import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const payload = {
      name:name,
      email:email,
      password:password
    }
    //console.log(JSON.stringify(payload));
    const val= await fetch("http://localhost:8000/users/signup",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body: JSON.stringify(payload)
    })
    const x=await val.json()
    console.log(x.message);
  }

  return (
    <form onSubmit={submitHandler}>
    <BoxContainer>
      <FormContainer>
        <Input type="text" value={name} placeholder="Full Name"  onChange={(e)=> setName(e.target.value)}/>
        <Input type="email" value={email} placeholder="Email"onChange={(e)=> setEmail(e.target.value)} />
        <Input type="password" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    </form>
  );
}