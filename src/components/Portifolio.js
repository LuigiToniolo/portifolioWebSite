import { Col, Row } from "react-bootstrap";
// import React ,{useState} from 'react';
import { i18n } from "./MultiLingue/Translate/i18n";
// import AWS from 'aws-sdk'

function upload(e) {
  
  console.log(e);
  const url =
    "https://5izqevu958.execute-api.sa-east-1.amazonaws.com/sample/uploadFile";
  fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ key: "curriculum_luigi.pdf" }),
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

// const S3_BUCKET = "luigitoniolo.com";
// const REGION ="us-east-1";

// AWS.config.update({
//   accessKeyId: 'AKIAXXHH7R6HWS4R5VM6',
//   secretAccessKey: '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'
// })

// const myBucket = new AWS.S3({
//   params: { Bucket: S3_BUCKET},
//   region: REGION,
// })

export const Portifolio = () => {

  //   const [progress , setProgress] = useState(0);
  //   const [selectedFile, setSelectedFile] = useState(null);

  //   const handleFileInput = (e) => {
  //       setSelectedFile(e.target.files[0]);
  //   }

  //   const uploadFile = (file) => {

  //       const params = {
  //           ACL: 'public-read',
  //           Body: file,
  //           Bucket: S3_BUCKET,
  //           Key: file.name
  //       };

  //       myBucket.putObject(params)
  //           .on('httpUploadProgress', (evt) => {
  //               setProgress(Math.round((evt.loaded / evt.total) * 100))
  //           })
  //           .send((err) => {
  //               if (err) console.log(err)
  //           })
  //   };

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
              <a
                href="Luigi_Toniolo_Resume.pdf"
                download="Luigi Toniolo Resume.pdf"
              >
                <button
                  type="submit"
                  href="Luigi_Toniolo_Resume.pdf"
                  download="Luigi Toniolo Resume.pdf"
                >
                  <span>{i18n.t("portifolio.button")}</span>
                </button>
                {/* <div>Native SDK File Upload Progress is {progress}%</div> */}
                <input type="file" onChange={upload} />
                {/* <button onClick={() => uploadFile(selectedFile)}>
                  {" "}
                  Upload to S3
                </button> */}
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
