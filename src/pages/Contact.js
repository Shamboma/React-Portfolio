import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Nav from "../components/Nav";

const Contact = () => {
  let title = "Contact Me";
  let desc = "You made it this far, might as well give me a try";
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-12"}>
          <Nav />
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-12 center"}>
          <Heading title={title} desc={desc} />
        </div>
      </div>
      <div className={"row fill"}>
        <div className={"col-6 center"}>
          <ContactInfo />
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-6 center"}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
