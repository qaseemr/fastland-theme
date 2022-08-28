import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import CounterBlock from "./Components/CounterBlock";
import About from "./style";

export default function AboutSection({ ...rest }) {
  return (
    <About {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-5 col-lg-5 col-md-7 col-xs-8">
            <About.Image mb="30px" mbLG="0">
              <img
                style={{ borderRadius: "20px" }}
                src="image/home-services/about-us-image-l4-1.png"
                alt="about"
                className="w-100"
              />
              <About.ImageInner>
                <img
                  style={{ borderRadius: "20px" }}
                  src="image/home-services/about-us-image-l4-2.png"
                  alt="about"
                  className="w-100"
                />
              </About.ImageInner>
            </About.Image>
          </Col>
          <Col
            xs="12"
            className="col-xl-5 offset-xl-2 col-lg-6 offset-lg-1 col-md-9 col-sm-11"
          >
            <About.Box>
              <About.ContentTextBlock className="text-center text-lg-start">
                <About.Subtitle as="h6" fontColor="#6001d3">
                  The Right Way To Scale Your Business
                </About.Subtitle>
                <About.Title as="h2" mb="30px">
                  Your Callers Will <br className="d-none d-xs-block" />
                  Simply Love It!
                </About.Title>
                <About.Text>
                  No more boring recordings, greet your clients with
                  <br className="d-none d-sm-block d-lg-none d-xxl-block" /> a
                  cheerful, courteous and professional phone receptionist
                  <br className="d-none d-sm-block d-lg-none d-xxl-block" /> who
                  will answer your phone in your office's name.
                </About.Text>
                <About.Text>
                  We will handle your calls the way you want them to be handled,
                  <br className="d-none d-sm-block d-lg-none d-xxl-block" />{" "}
                  just as if we are in your office. We are not doing this
                  <br className="d-none d-sm-block d-lg-none d-xxl-block" /> for
                  the first time - rated & reviewed since 2001.
                </About.Text>
              </About.ContentTextBlock>
              <CounterBlock mt="50px" />
            </About.Box>
          </Col>
        </Row>
      </Container>
    </About>
  );
}
