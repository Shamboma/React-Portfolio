import linkedinMark from "../assests/LinkedinMark.webp";
import githubMark from "../assests/GithubMark.webp";

const ContactInfo = () => {
  return (
    <article className={"ContactInfo"}>
      <a
        href={"https://www.linkedin.com/in/austinoneillalgonquin/"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <img src={linkedinMark} alt={linkedinMark} />
      </a>
      <a
        href={"https://github.com/Shamboma"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <img src={githubMark} alt={githubMark} />
      </a>
      <h2>Email</h2>
      <h3>austindoneill@gmail.com</h3>
      <h2>Phone</h2>
      <h3>613-809-5567</h3>
    </article>
  );
};

export default ContactInfo;
