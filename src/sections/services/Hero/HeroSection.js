import React from "react";
// import Image from 'next/image';
import { Col, Container, Row } from "react-bootstrap";
import { Form, Link } from "~components";
import Hero from "./style";

export default function HeroSection() {
  return (
    <Hero
      overlay="image/home-services/hero-overlay.png"
      style={{
        backgroundImage: `url("image/home-services/hero-l4-image.jpg")`,
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10">
            <Hero.Content>
              <Hero.Title as="h2" fontColor="#fff">
                Tru-Live™ <br className="d-none d-sm-block" /> Phone Answering
                Service
              </Hero.Title>
              <Hero.Text fontColor="#fff">
                No recordings ever. Always a live person answering{" "}
                <br className="d-none d-sm-block" />
                your phone in your office name.
              </Hero.Text>
              {/* Newsletter */}
              <Hero.Newsletter mt="40px">
                <Form>
                  <Hero.Box>
                    <i className="far fa-envelope icon" />
                    <Form.Input placeholder="Enter your email" />
                  </Hero.Box>
                  <Hero.NewsletterButton
                    className="btn-torch-red"
                    as={Link}
                    to="/"
                  >
                    FREE Quote
                  </Hero.NewsletterButton>
                </Form>
                <Hero.NewsletterText>
                  Base Rates As Low As $32.95/month
                </Hero.NewsletterText>
              </Hero.Newsletter>
              {/*/ .Newsletter */}
            </Hero.Content>
          </Col>
          {/*/ .Welcome Content Area */}
        </Row>
      </Container>
    </Hero>
  );
}
