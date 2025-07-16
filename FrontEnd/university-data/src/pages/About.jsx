import AboutImg from "../assets/img_6.png";
import "./About.css";
function About() {
  return (
    <>
    {/* Main container for the About page hero section */}
      <div className="about-hero">
        <img src={AboutImg} alt="About background" className="about-hero__image" />
         {/* Overlay div on top of the image to show text content */}
        <div className="about-hero__overlay">
          <h1>About Us</h1>
          <p>LaunchCode is a nonprofit offering free tech education and job placement opportunities to bring new people from all backgrounds into the tech field and reshape the way employers think about hiring.</p>
          <h2>How We Started</h2>
          <p>
             LaunchCode was founded in 2013 to help people with nontraditional backgrounds find fulfilling, upwardly-mobile careers, and to help companies find skilled, new tech talent from all backgrounds and walks of life.Millions of Americans are unemployed and many more are stuck in low-wage job cycles which leave them struggling to find livable salaries, employable skills, and a chance for advancement. American businesses also have a problem — there just isn’t enough traditional tech talent to match the growing demand.
             Code.org reports nearly 500,000 open computing jobs nationwide, yet only around 60,000 computer science graduates entered the workforce last year. These jobs are spread all over the economy, making products and services like your mobile phone, satellite television, and online searches just…work.Back in 2013, Square’s Jim McKelvey founded LaunchCode to address these problems. Jim had experienced the lack of talent firsthand while trying to build a development shop for his new company Square in his hometown of St. Louis, MO.
              Eventually Jim moved Square to California for access to skilled workers, but knew there must be some way to connect the city’s rising unemployment with its shortage of tech talent. And so, LaunchCode was born.
              It turns out, when you make quality education free and accessible, amazing things can happen.</p>
        </div>
      </div>
    </>
  );
}

export default About;