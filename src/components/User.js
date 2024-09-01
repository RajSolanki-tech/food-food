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
      <div className="user-card text-center font-bold w-6/12 m-auto">
        <div className="flex justify-center">
          <img src={avatar_url} />
        </div>
        <h2 className="bg-red-600 text-white">Name: {name}</h2>
        <h3 className="bg-blue-600 text-white">Location: {location}</h3>
        <h3 className="bg-green-600 text-white">
          Contact: rajrajeshwarsingh03@gmail.com
        </h3>
      </div>
    );
  }
}

export default User;
