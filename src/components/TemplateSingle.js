import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchData, fetchChosen } from "../actions";
import templateValues from "./templateValues";
import { singleVertical, singleVertical2 } from "./templateModels";
class TemplateSingle extends Component {
  componentDidMount() {
    this.props.fetchData(templateValues.product);
  }
  selectTemplate(item, model) {
    let templateObj = {
      product: item,
      single: true,
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
  renderSingleTemplates() {
    var verticalTemplates = _.map(this.props.data[0], item => {
      return (
        <div key={item.name}>
          <Col xs={12} md={4}>
            {singleVertical(item)}
            {this.renderButton(item, "vertical1")}
          </Col>
        </div>
      );
    });
    var verticalTemplates2 = _.map(this.props.data[0], item => {
      return (
        <div key={item.name}>
          <Col xs={12} md={4}>
            {singleVertical2(item)}
            {this.renderButton(item, "vertical2")}
          </Col>
        </div>
      );
    });
    return (
      <Grid style={{ width: "100%" }}>
        <h5>Style1</h5>
        <Row className="show-grid">{verticalTemplates}</Row>
        <h5>Style2</h5>
        <Row className="show-grid">{verticalTemplates2}</Row>
      </Grid>
    );
  }
  render() {
    return (
      <div>
        <h5>Single Templates</h5>

        {this.props.data && this.renderSingleTemplates()}
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
)(TemplateSingle);
