import cont1 from "../assets/study.png";
import cont2 from "../assets/girls.png";


// Functional React component called Container
const Container = () => {
  return (
    <div className="container">
      <h1>Popular Courses</h1>
      <p>Latest courses which are helpful for your career</p>
     {/* Main content section */}
      <div className="first-des">
        <div className="des-text">
          <h2>FullStack SoftwareDevelopment </h2>
          <p>
           Full Stack Software Development involves building both the front-end and back-end of web applications. A full stack developer is skilled
            in designing user interfaces using technologies like HTML, CSS, and JavaScript (with frameworks like React), and also handles server-side
            logic, databases, and APIs using tools such as Node.js, Express, and MongoDB. This career path is in high demand and equips developers to
            build complete, responsive, and dynamic web applications from start to finish.Learning full stack development equips you with the skills to become a software engineer,
            web developer, technical product manager, or even start your own tech venture.

        </p>
            <h2>Python Programming</h2>
                  <p>
                      Python is a powerful, high-level programming language known for its readability and simplicity. It is widely used across different fields such as web development, data science, artificial intelligence, machine learning, automation, and more. Its intuitive syntax and vast ecosystem of libraries (like Django, Flask, Pandas, NumPy, TensorFlow, and OpenCV) make it an excellent language for both beginners and professionals.
                      Python supports object-oriented and functional programming paradigms, making it flexible for building a variety of applications. Whether you're creating a web application, analyzing data, developing algorithms, or automating tasks, Python provides the tools and community support you need.
                      Learning Python opens up career paths in software engineering, data analysis, AI development, cybersecurity, and scripting for cloud platforms. It's also often used in full stack web development, especially on the back end using frameworks like Django or Flask.
                    </p>

         </div>
         {/* Image section on the right side */}
         <div className="image">
          <img alt="python" src={cont1} />
          <img alt="python" src={cont2} />
        </div>
      </div>
    </div>
  );
};

export default Container;