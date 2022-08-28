import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentWidget from "./Components/Widget";
import Content from "./style";
export default function ContentSectionOne({ ...rest }) {
  return (
    <Content backgroundColor="rgba(169, 210, 255, 0.1)" {...rest}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1"
          >
            <Content.Subtitle as="h6" fontColor="#6001d3">
              Why Choose Us?
            </Content.Subtitle>
            <Content.Title as="h2" mb="13px">
              We are the industry <br className="d-none d-xs-block" />
              benchmark for
              <br className="d-none d-xs-block" />
              Call Answering
            </Content.Title>
            <Content.Text mb="45px" mbXL="65px">
              Being in the business since 2001, we offer the best
              <br className="d-none d-md-block" /> call answering services
              across the industry{" "}
            </Content.Text>
            <Content.Widget>
              {/* Single Widget */}
              <ContentWidget
                icon={"fa fa-rocket"}
                title={"Fast Working Process"}
                text={
                  "From quote to getting everything set up, we do not keep your business hanging and do it fast"
                }
              />
              {/* Single Widget */}
              <ContentWidget
                icon={"fa fa-hammer"}
                title={"Only US-Based Operators"}
                text={
                  "No strange accents for your clients we have only US receptionists"
                }
              />
              {/* Single Widget */}
              <ContentWidget
                icon={"fa fa-hourglass"}
                title={"No Long Term Contracts"}
                text={
                  "We know commitments are difficult - therefore we do not ask for long term contracts"
                }
              />
            </Content.Widget>
          </Col>
          <Col
            xs="12"
            className="col-xxl-7 col-xl-6 col-lg-5 col-md-9 col-xs-10 order-1 order-lg-2"
          >
            <Content.Widget mb="30px" mbXL="0px">
              <img
                src="image/home-services/content-img-l4-2.png"
                alt="content"
                className="w-100"
              />
            </Content.Widget>
          </Col>
        </Row>
      </Container>
    </Content>
  );
}
