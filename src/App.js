import React from "react";
import BasicInfo from "./component/BasicInfo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
         {
          name: "Ivanna",
          number: "1",
          dateOfBirth: "11/10/1997",
        },

        {
          name: "James",
          number: "2",
          dateOfBirth: "07/17/1987",
        },

        {
          name: "Ivar",
          number: "3",
          dateOfBirth: "08/03/2021",
        },
      ]
    };
  }  
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key={index} person={person} />;
    })
  }
}

export default App;