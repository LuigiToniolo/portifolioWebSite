import { Col, Row } from "react-bootstrap";
import { i18n } from "./MultiLingue/Translate/i18n";
// import AWS from 'aws-sdk'

function upload(e) {
  console.log(e);
  const url =
    "https://5uy0zn1mdk.execute-api.us-east-1.amazonaws.com/sample/sampleuploadfunction";
  fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ key: "teste" }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      // Agora vamos lançar o arquivo para a url da aws lambda:

      fetch(res.URL, {
        method: "PUT",
        mode: "cors",
        body: e.target.files[0],
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

async function download() {
  const url =
    "https://3kv2y7dmj7.execute-api.us-east-1.amazonaws.com/default/sampleDownloadFunction";
  fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ key: "Luigi_Toniolo_Resume.pdf" }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      fetch(res.URL, {
        method: "GET",
        mode: "cors",
      })
        .then((res) => window.open(res.url, "_blank"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

// const [block, setBlock] = useState(false);

// const blockPanel = () => {
//   setBlock(true);
// };

// const unblockPanel = () => {
//   setBlock(false);
// }


export const Portifolio = () => {



  return (

    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              {i18n.t("portifolio.title1")}
              <br></br>
              {i18n.t("portifolio.title2")}
            </h3>
          </Col>

          <Col md={6} xl={7}>
            <div class="portifolio">
              <a>
                <button onClick={download}>
                  <span>{i18n.t("portifolio.button")}</span>
                </button>
                {/* <input type="file" onChange={upload} /> */}
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
