const Heading = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </header>
  );
};

export default Heading;
