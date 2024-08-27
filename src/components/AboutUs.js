import User from "./User";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User
        name={"passing  name raj as a prop"}
        location={"Udaipur, Rajasthan"}
      />
    </div>
  );
};

export default AboutUs;
