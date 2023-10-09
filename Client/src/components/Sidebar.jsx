import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {BiHome} from 'react-icons/bi';
import {RxDashboard} from 'react-icons/rx';
import {BsPlusCircle} from 'react-icons/bs';
import {FiCopy} from 'react-icons/fi';
import {MdOutlineAssignmentTurnedIn} from 'react-icons/md';
const Sidebar = () => {
  return (
    <div >
      <Container className='bg-gray-100  f-height'>
        <Row className='sections ' >
           <Col className='nav-logo'>
           <a href='#' className='logo'>
            <img src='imgs/logo.webp' alt='site logo'/>
          </a>
           <ul>
            <li>
            <BiHome className='icon text-gray' size={32}/>
              <a href='#' className='link-text-gray'>Dashboard</a>
            </li>
          
            <li>
            <RxDashboard className='icon text-gray' size={32}/>
              <a href='#' className='link-text-gray'>Add Course</a>
            </li>
            <li>
            <BsPlusCircle className='icon text-gray' size={32}/>
              <a href='#' className='link-text-gray'>Add Course</a>
            </li>
            <li>
            <FiCopy className='icon text-gray' size={32}/>
              <a href='#' className='link-text-gray'>Lessons</a>
            </li>
            <li>
            <FiCopy className='icon text-gray' size={32}/>
            <a href='#' className='link-text-gray'>Lessons</a>
            </li>
           </ul>
           </Col>
           <Col>Col 3</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sidebar