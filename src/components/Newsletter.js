import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Click in the button<br></br>and Download my Resume!
            </h3>
          </Col>

          <Col md={6} xl={7}>

            <div class="portifolio">
              <a
                href="Luigi_Toniolo_Resume.pdf"
                download="Luigi Toniolo Resume.pdf"
              >
                <button
                  type="submit"
                  href="Luigi_Toniolo_Resume.pdf"
                  download="Luigi Toniolo Resume.pdf"
                >
                  <span>Download my Portifolio ;)</span>
                </button>
              </a>
            </div>

          </Col>
        </Row>
      </div>
    </Col>
  );
};
