import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchData, fetchChosen } from "../actions";
import {
  singleVertical,
  singleVertical2,
  multipleVertical,
  multipleVertical2
} from "./templateModels";
class StartPage extends Component {
  renderTemplateChosen() {
    const { chosen, fetchChosen } = this.props;
    return (
      <div>
        {chosen &&
          chosen[0] && (
            <div>
              <h5>Template Chosen</h5>
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  {chosen[0].single ? (
                    <div>
                      {chosen[0].model === "vertical1" &&
                        singleVertical(chosen[0].product)}
                      {chosen[0].model === "vertical2" &&
                        singleVertical2(chosen[0].product)}
                    </div>
                  ) : (
                    <div>
                      {chosen[0].model === "multiple1" &&
                        multipleVertical(chosen[0].product)}
                      {chosen[0].model === "multiple2" &&
                        multipleVertical2(chosen[0].product)}
                    </div>
                  )}
                  <Button className="btn" onClick={() => fetchChosen()}>
                    Delete
                  </Button>
                  <Button className="btn">Publish</Button>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
  renderButtons() {
    return (
      <div>
        <h5>Select a template for your product</h5>
        <Button type="button" style={{ backgroundColor: "lightgrey" }}>
          <Link to="/single">Campaign 1: Single Template</Link>
        </Button>
        <Button type="button" style={{ backgroundColor: "lightgrey" }}>
          <Link to="/multiple">Campaign 2: Multiple Template</Link>
        </Button>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {this.props.chosen.length > 0 && this.renderTemplateChosen()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { chosen: state.chosen };
}
export default connect(
  mapStateToProps,
  { fetchData, fetchChosen }
)(StartPage);
