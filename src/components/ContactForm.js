const ContactForm = () => {
  return (
    <form
      className={"ContactForm"}
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      <input
        type={"text"}
        id={"name"}
        name={"name"}
        placeholder={"Name"}
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
        id={"subject"}
        name={"subject"}
        placeholder={"Subject"}
        className={"ContactForm-input"}
      />
      <textarea
        id={"message"}
        name={"message"}
        placeholder={"Message"}
        className={"ContactForm-input"}
      />
      <input type="submit" value="Submit" className={"ContactForm-submit"} />
      <input type="hidden" name="form-name" value="ContactForm" />
    </form>
  );
};

export default ContactForm;
