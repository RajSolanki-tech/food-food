import React from "react";
import { useState } from "react";

// const User = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="user-card">
//       <h1>Count = {count}</h1>
//       <h2>Name: Raj Solanki</h2>
//       <h3>Location: Udaipur</h3>
//       <h3>Contact: rajrajeshwarsingh03@gmail.com</h3>
//     </div>
//   );
// };

// export default User;

class User extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Component Did Mount!");
    const data = await fetch("https://api.github.com/users/RajSolanki-tech");

    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update!");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount!");
  }

  render() {
    console.log("Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: rajrajeshwarsingh03@gmail.com</h3>
      </div>
    );
  }
}

export default User;
