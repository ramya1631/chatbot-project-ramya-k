import './Content.css';
import Button from './Button';

// Functional React component named "Content"
function Content(props) {
  return (
    // Outer container for layout and spacing
    <div className="content-container">

      {/* Dynamic section based on class name passed through props (cName) */}
      <div className={props.cName}>

        {/* Display the image using the path from props.contentImg */}
        <img
          alt="ContentImg"
          src={props.contentImg}
          className="content-image"
        />

        <div className="content-overlay" />

        {/* Text section over the image */}
        <div className="content-text">
          {/* Heading for the section */}
          <h1>{props.title}</h1>

          {/* Paragraph text from props */}
          <p>{props.text}</p>

          {/* Reusable Button component – accepts destination URL and styling from props */}
          <Button to={props.url} className={props.btnClass}>
            {props.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}


export default Content;