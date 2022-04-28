import React from 'react';

import './App.css';
import { Col, Container, Row } from 'react-bootstrap'
import CardB from './component/CardB'

function App() {
  let titleH1='titleH1'
  const arr = [
    {
      title: 'title1',
      subtitle: 'subtittle 1',
      text: 'text 1'
    },
    {
      title: 'title 2',
      subtitle: 'subtittle 2',
      text: 'text 2'
    },
    {
      title: 'title 3',
      subtitle: 'subtittle 3',
      text: 'text 3'
    },
  ]
  const change=(e)=>{
    const value=e.target.value
    if (isNaN(value)){
      console.log('is not number');
    }
    else{
      console.log(e.target.value);
    }
  }
  const click = (e) =>{
    e.preventDefault();
    console.log('click');
  }
  return (
    <Container>
      <h1 className='text-center' onClick={click}>{titleH1}</h1>
      <a href={'http://wwww.google.com'} onClick={click}>click </a>
      <input type='text' onChange={change}/>
      <Row>
        {
          arr.map((item, index) => {
            const { title, subtitle, text } = item
            return (

              <Col>
                <CardB title={title} subtitle={subtitle} text={text} />
              </Col>
            )
          })}
     </Row>
    </Container>
  );
}

export default App;
