import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("NotFoundPage");
    }
  render() {
        return (
             <div className="col-md-6 col-md-offset-3">
                <h2>PAGE NOT FOUND</h2>
                <div >Lost in the Rough...</div>
              </div>
           );
  }
}
function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedNotFoundPage = connect(mapStateToProps)(NotFoundPage);

export { connectedNotFoundPage as NotFoundPage };