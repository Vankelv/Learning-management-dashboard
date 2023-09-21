import React from 'react'
import Sidebar from './components/sidebar'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from './pages/dashboard';
const App = () => {
  return (
    <div>
        <Container>
            <Row className='flex'> 
                <Col className='col-4'>
                <Sidebar/>
                </Col>
                <Col className='col-8'>
                    <Dashboard/>
                </Col>
            </Row>
        </Container>
  
    </div>
  )
}

export default App