import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchData, fetchChosen } from "../actions";
import templateValues from "./templateValues";
import { multipleVertical, multipleVertical2 } from "./templateModels";
class TemplateMultiple extends Component {
  componentDidMount() {
    this.props.fetchData(templateValues.multiProducts);
  }
  selectTemplate(item, model) {
    let templateObj = {
      product: item,
      single: false,
      model: model
    };
    this.props.fetchChosen(templateObj);
  }
  renderButton(item, model) {
    return (
      <Button
        className="selectBtn"
        onClick={() => this.selectTemplate(item, model)}
      >
        <Link to="/">Save</Link>
      </Button>
    );
  }

  renderMultipleTemplates() {
    const { data } = this.props;
    var templates = _.map(data[0], item => {
      if (item[0]) {
        let uniqueKey = "v1" + item[0].name;
        return (
          <div key={uniqueKey}>
            <Col xs={12} md={4}>
              {multipleVertical(item)}
              {this.renderButton(item, "multiple1")}
            </Col>
          </div>
        );
      }
    });
    var templates2 = _.map(data[0], item => {
      if (item[0]) {
        let uniqueKey = "v2" + item[0].name;
        return (
          <div key={uniqueKey}>
            <Col xs={12} md={4}>
              {multipleVertical2(item)}
              {this.renderButton(item, "multiple2")}
            </Col>
          </div>
        );
      }
    });
    return (
      <Grid style={{ width: "100%" }}>
        <h5>Style1</h5>
        <Row className="show-grid">{templates}</Row>
        <h5>Style2</h5>
        <Row className="show-grid">{templates2}</Row>
      </Grid>
    );
  }
  render() {
    return (
      <div>
        <h5>Multiple Templates</h5>
        {this.props.data && this.renderMultipleTemplates()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { data: state.data, chosen: state.chosen };
}
export default connect(
  mapStateToProps,
  { fetchData, fetchChosen }
)(TemplateMultiple);
