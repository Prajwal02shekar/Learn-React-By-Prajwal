import React from 'react'

const withFormHandling = (WrappedComponent) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        values: {},
        errors: {},
      }
    }
    handleChange = e => {
      const { name, value } = e.target;
      this.setState(prevState => ({
          // values:prevState.values,
            [name]: value
        }))
        // console.log(name);
        // console.log(value);
    }
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          values={this.state.values}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default withFormHandling