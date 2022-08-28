import React from "react";
import Promo from "./style";
import { Col, Container, Row } from "react-bootstrap";

export default function PromoSection({ ...rest }) {
  return (
    <Promo>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-12 text-center">
            <Promo.InnerWrapper
              style={{
                backgroundImage: `url("image/home-services/promo-l4-img.png")`,
              }}
            >
              <Promo.Subtitle fontColor="#ffce3e">We Are Ready</Promo.Subtitle>
              <Promo.Title as="h2" fontColor="#fff">
                Get In Touch Today
              </Promo.Title>
              <Promo.Text fontColor="#fff">
                Talk to us now and let us create a custom quote for you right
                away.
                <br className="d-none d-sm-block" />
                No commitments, no contracts!
                <br className="d-none d-sm-block" />
              </Promo.Text>
              <Promo.Button
                className="btn-torch-red"
                as="a"
                href="tel:(866) 503-7025"
                sizeX="180px"
                sizeY="56px"
                mt="20px"
              >
                Call
              </Promo.Button>
            </Promo.InnerWrapper>
          </Col>
        </Row>
      </Container>
    </Promo>
  );
}
