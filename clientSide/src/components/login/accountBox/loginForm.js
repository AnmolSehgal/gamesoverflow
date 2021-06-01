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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const payload={
      email:email,
      password:password
    }
    const data = await fetch("http://localhost:8000/users/signin",{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
    })
    const val=await data.json()
    localStorage.setItem("token",val.token);
    const x=localStorage.getItem("token");
    setEmail("");
    setPassword("");

    console.log(x);
  }


  return (
    <form onSubmit={submitHandler}>
    <BoxContainer>
      <FormContainer>
        <Input type="email" value={email} placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
        <Input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    </form>
  );
}
