import StudentImg from "../assets/img_2.png"; // Background image for the Students section
import ServiceItem from "../components/ServiceItem"; // Reusable component to display each service item
import "./Students.css";  // CSS styles for this component

// Array of student support services, each with a title and description
const services = [
  {
    title: "Academic Advising",
    description: "One-on-one support for coursework planning, choosing majors, and setting goals."
  },
  {
    title: "Career Counseling",
    description: "Resume reviews, mock interviews, and networking events to prepare for your career."
  },
  {
    title: "IT Help Desk",
    description: "24/7 support for tech issues like campus email, Blackboard, and online tools."
  }
];

function Students() {
  return (
    <>
      {/* Hero section with background image and overlay text */}
      <div className="students-hero">
        <img
          src={StudentImg}
          alt="Students Background"
          className="students-hero__image"
        />
        <div className="students-hero__overlay">
          <h1>Students Desk</h1> {/* Main heading */}
          <p>
            Explore our range of student services designed to support your academic journey and career goals.
          </p> {/* Introductory paragraph */}
        </div>
      </div>

      {/* Main page content container */}
      <div className="page students-page">
        <h2>Student Support Services</h2> {/* Section heading */}

        {/* Grid container to display service items */}
        <div className="services-grid">
          {/* Loop over services array and render a ServiceItem for each */}
          {services.map((service, index) => (
            <ServiceItem
              key={index} // Unique key for each item in the list
              title={service.title} // Service title passed as prop
              description={service.description} // Service description passed as prop
              className="fade-in-card" // CSS class for animation or styling
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Students;