import App from '../App';

const Contact = (props) => {
  // property returning React element
  return (
    <>
      <h3>{props.name}</h3>
      <p>
        I'm {props.age} years old, graduated from {props.school} in
      </p>
      <p> {props.graduationYear}</p>
    </>
  );
};

export default Contact;
