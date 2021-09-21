const ContactForm = () => {
  return (
    <form className={"ContactForm"}>
      <input
        type={"text"}
        id={"name"}
        name={"name"}
        placeholder={"Name"}
        className={"ContactForm-input"}
      />
      <input
        type={"text"}
        id={"company"}
        name={"company"}
        placeholder={"Company"}
        className={"ContactForm-input"}
      />
      <input
        type={"email"}
        id={"email"}
        name={"email"}
        placeholder={"Email"}
        className={"ContactForm-input"}
      />
      <input
        type={"text"}
        id={"message"}
        name={"message"}
        placeholder={"Message"}
        className={"ContactForm-input"}
      />
      <input type="submit" value="Submit" className={"ContactForm-submit"} />
    </form>
  );
};

export default ContactForm;
