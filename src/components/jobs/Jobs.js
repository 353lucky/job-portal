import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Button, Col, Row, Modal} from "react-bootstrap";
import "./Jobs.css";
import { Link } from "react-router-dom";
function Jobs() {
  const [jobs, setJobs] = useState();
  const [input, setInput] = useState();
  const [companyName, setCompanyName] = useState();
  const [id, setId] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const getJobs = async () => {
      axios
        .get("http://localhost:1337/api/jobs")
        .then((res) => setJobs(res.data.data))
        .catch((err) => console.log(err));
    };
    getJobs();

    {
      jobs &&
        jobs.map((job) => {
          return console.log(job.attributes.id);
        });
    }
    console.log(input);
    {
      input &&
        input.map((i) => {
          return console.log(i);
        });
    }
  }, []);
  return (
    <div>
      {jobs &&
        jobs.map((job) => {
          return (
            // <div>{job.attributes.Title}</div>
            <Container>
              <div className="jobs">
                <div className="job_company_title">
                  <Row>
                    <Col sm={8}>
                      <h3>{job.attributes.compid}</h3>
                      <h5>{job.attributes.Title}</h5>
                    </Col>
                    <Col sm={4}>
                      <button varient="primary" className="btn-css" onClick={handleShow}>
                        Apply Now
                      </button>
                      <br></br>
                    </Col>
                  </Row>
                </div>
                <hr></hr>
                <h5>Description : {job.attributes.Description}</h5>
              </div>
            </Container>
          );
        })}
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Jobs;