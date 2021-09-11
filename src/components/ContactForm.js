const ContactForm = () => {
  return (
    <form>
      <input type={"text"} id={"name"} name={"name"} placeholder={"Name"} />
      <input
        type={"text"}
        id={"company"}
        name={"company"}
        placeholder={"Company"}
      />
      <input type={"email"} id={"email"} name={"email"} placeholder={"Email"} />
      <input
        type={"text"}
        id={"message"}
        name={"message"}
        placeholder={"Message"}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
