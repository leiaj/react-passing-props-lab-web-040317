import React, { Component } from 'react';

// class Filter extends Component {
//   constructor(props) {
//     super(props);
//   }


// //   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.props.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
// //   }
// // }

const Filter = (props) => {
  return (
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
}

Filter.defaultProps = {
  filters: [],
  handleChange: function(){}
}


export default Filter;
