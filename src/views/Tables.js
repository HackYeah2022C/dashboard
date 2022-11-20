import React from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import myData from './data.json';

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: myData
    }
  };


  getTableRows() {
    const table = this.state.table.sort((a,b)=>b.brakeFactor-a.brakeFactor);
    return (
      table.map((item) => {
        const color = item.sentiment;
        return(
          <tr>
            <td>{item.title}</td>
            <td>{item.abstract}</td>
            <td>{item.link}</td>
            <td>{item.timestamp}</td>
            <td>{item.sourceName}</td>
            <td>{item.tags.join(',')}</td>
            <td>{item.category}</td>
            <td className={color}>{item.sentiment}</td>
            <td>{item.brakeFactor}</td>
          </tr>
      )})
    )
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Truth Table" subtitle="Spill the Real" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Title
                      </th>
                      <th scope="col" className="border-0">
                        Abstract
                      </th>
                      <th scope="col" className="border-0">
                        Source
                      </th>
                      <th scope="col" className="border-0">
                        Time of publications
                      </th>
                      <th scope="col" className="border-0">
                        Autor(s)
                      </th>
                      <th scope="col" className="border-0">
                        Tags
                      </th>
                      <th scope="col" className="border-0">
                        Category
                      </th>
                      <th scope="col" className="border-0">
                        Sentiment assessment
                      </th>
                      <th scope="col" className="border-0">
                        Fake assessment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.getTableRows()}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tables;
