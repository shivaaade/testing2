import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = [React.createRef()];

    this.state = {
      inputs: [
        <input key={0} ref={this.inputRefs[0]} onChange={this.handleChange} />,
      ],
      values: [],
    };
  }
  handleEnter(event) {
    if (event.key === "Enter") {
      if (this.inputRef.current && this.inputRef.current.value) {
        this.setState((prevState) => ({
          skills: [...prevState.skills, prevState.currentSkill],
          currentSkill: "",
        }));
        this.inputRef.current.focus();
      }
    }
  }

  handleChange = (event) => {
    const inputIndex = this.inputRefs.findIndex(
      (ref) => ref.current === event.target
    );
    const inputValue = event.target.value;

    this.setState((prevState) => {
      const newValues = [...prevState.values];
      newValues[inputIndex] = inputValue;
      return { values: newValues };
    });
  };

  render() {
    const { inputs, values } = this.state;

    return (
      <div>
        {inputs.map((input, index) => (
          <span key={index}>{input} </span>
        ))}
        <button onClick={this.handleEnter}>Enter</button>
        {values.map((value, index) => (
          <p key={index}>{`Input ${index + 1}: ${value}`}</p>
        ))}
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import {v4 as uuidV4} from 'uuid'
// import "./App.css";

// const newList = {id:uuidV4(),valList:''}

// class App extends Component {
//   state = { val: "",newAdd:[newList] };

//   inputRef1 = React.createRef();
//   inputRef2 = React.createRef();

//   onChangeInputVal = (e) => {
//     this.setState({ val: e.target.val });
//   };

//   // onKeyDownFun = (e) => {
//   //   if (e.key === "Enter") {
//   //     this.inputRef2.current.focus();
//   //   }
//   // };

//   render() {
//     return (
//       <div>
//         {this.state.newAdd.map((each)=>())}
//         <input
//           ref={this.inputRef1}
//           value={this.state.val}
//           onChange={this.onChangeInputVal}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               this.inputRef2.current.focus();
//             }
//           }}
//         />
//         <br />
//         <input ref={this.inputRef2} />
//       </div>
//     );
//   }
// }

// export default App;
