import { React } from "react";
import { Button } from "react-bootstrap";

const TestPage = () => {
const firstName = 'Batman';
const lastName = 'Robin';

  const apiGatewayCall = () => {
    const myHeaders = new Headers();
    // add content type header to object
    myHeaders.append('Content-Type', 'application/json');
    // using built in JSON utility package turn object to string and store in a variable
    const raw = JSON.stringify({ firstName, lastName });
    console.log('raw', raw);
    // create a JSON object with parameters for API call and store in a variable
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    // make API call with parameters and use promises to get response
    fetch('https://ly03kl74eh.execute-api.ap-south-1.amazonaws.com/dev', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(JSON.parse(result).body))
      .catch((error) => console.log('error', error));
  };


  return (
    <Button onClick={apiGatewayCall}> Call Service </Button>
  );
};

export default TestPage;
