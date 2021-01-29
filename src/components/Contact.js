const Contact = (props) => {
  // property returning React element
  const space = ' ';
  return (
    <>
      <h3>{props.name}</h3>
      <p>
        I'm {props.age} years old, graduated from {props.school} in {space}
        {props.graduationYear}
      </p>
    </>
  );
};

export default Contact;
