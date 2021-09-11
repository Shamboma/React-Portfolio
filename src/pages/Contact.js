import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import NavSide from "../components/NavSide";

const Contact = () => {
  return (
    <>
      <Heading title={"Contact"} desc={"DESC"} />
      <ContactForm />
      <ContactInfo />
      <NavSide up={"/about"} down={"/"} />
    </>
  );
};

export default Contact;
