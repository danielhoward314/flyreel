import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import getPeople from '../store/people';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  async componentDidMount() {
    await this.props.onGetPeople();
  }

  render() {
    const { people } = this.props;
    if (!people.length) return null;
    return (
      <div>got peeps</div>
    )
  }
}

const mapState = (state) => ({
  people: state.peopleReducer.people
});

const mapDispatch = (dispatch) => ({
  onGetPeople: (people) => dispatch(getPeople(people))
});

export default connect(mapState, mapDispatch)(App);
