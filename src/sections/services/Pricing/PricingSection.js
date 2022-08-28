import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Pricing from "./style";
import PricingCard from "./Components/Card";
export default function PricingSection({ ...rest }) {
  return (
    <Pricing backgroundColor="#f3f4f6" {...rest}>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="col-lg-8 col-xl-9 col-xxl-7">
            <Pricing.Box mbLG="60px" mb="40px" className="text-center">
              <Pricing.Subtitle fontColor="#ff1e38" as="h6">
                See Our Best Prices
              </Pricing.Subtitle>
              <Pricing.Title mb="20px" as="h2">
                Live Chat 24/7 Support
              </Pricing.Title>
            </Pricing.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Single Table */}
          <Col
            xs="12"
            className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9"
          >
            <PricingCard title="Basic Package" L1="None*" pricetag="33" />
          </Col>
          <Col
            xs="12"
            className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9"
          >
            <PricingCard
              title="Small Business"
              L1="100 Calls/Mo."
              pricetag="89"
            />
          </Col>
          <Col
            xs="12"
            className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9"
          >
            <PricingCard
              title="Medium Business"
              L1="250 Calls/Mo."
              pricetag="199"
            />
          </Col>
          <Col
            xs="12"
            className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9"
          >
            <PricingCard
              title="Enterprise Business"
              L1="2500 Calls/Mo."
              pricetag="1699"
            />
          </Col>
        </Row>
      </Container>
    </Pricing>
  );
}
