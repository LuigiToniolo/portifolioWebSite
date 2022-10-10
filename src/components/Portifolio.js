import { Col, Row } from "react-bootstrap";
import { i18n } from "./MultiLingue/Translate/i18n";

export const Portifolio = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
            {i18n.t('portifolio.title1')}<br></br>{i18n.t('portifolio.title2')}
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
                  <span>{i18n.t('portifolio.button')}</span>
                </button>
              </a>
            </div>

          </Col>
        </Row>
      </div>
    </Col>
  );
};
