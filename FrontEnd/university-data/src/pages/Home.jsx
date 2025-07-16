import Content from "../components/Content";
import Container from "../components/Container";
import Chatbot from "../components/Chatbot";

function Home() {
  return (
    <>
    {/* Content component shows a big banner with image, title, and button */}
      <Content
        cName="cont"
        contentImg="https://plus.unsplash.com/premium_photo-1713296254777-0a89f05dcb60?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Educational Journey"
        buttonText="Register Here"
        btnClass="btn"
        url="/register"
      />
     {/* Container component displays popular courses or other important info */}
      <Container />
      {/* Chatbot component adds an interactive chatbot on the page */}
      <Chatbot />
    </>
  );
}

export default Home;