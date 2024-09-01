import User from "./User";

const AboutUs = () => {
  return (
    <div>
      <h1 className="font-extrabold text-2xl m-10 text-center">About</h1>
      <User
        name={"passing  name raj as a prop"}
        location={"Udaipur, Rajasthan"}
      />
    </div>
  );
};

export default AboutUs;
