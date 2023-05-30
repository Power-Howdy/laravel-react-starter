import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditCategory from "./components/category/edit.component";
import CategoryList from "./components/category/list.component";
import CreateCategory from "./components/category/create.component";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';
// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Basic Crud App
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/category/create" element={<CreateCategory />} />
            <Route path="/category/edit/:id" element={<EditCategory />} />
            <Route exact path='/' element={<CategoryList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;
