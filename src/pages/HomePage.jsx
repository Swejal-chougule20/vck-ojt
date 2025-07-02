import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
  return(
    <div>
    <Header/> 
    <div className="page-container" style={{ overflow: "auto" }}>
      <div className="section1">
        <img src="\Images\header-new.png" alt="Vivekanand College" className="image1"/>
          <div className="text1">
            <h1> Welcome to Vivekanand College! </h1>
            <p>Your journey to excellence starts here.</p>
            <Link to="/admission" className="apply-btn">Apply Now!</Link>
          </div>
      </div>
          <p>
          <b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
          <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped</p>
          <h2>Why Choose Vivekanand College?</h2>
          <hr/>
          <ul>
          <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
          <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
          <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
          <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
          <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
          </ul>
          <h2>Campus Life & Facilities</h2>
          <hr/>
          <img src="\Images\campus-life-Crkero7B.jpg" alt="Campus life" width="700"/>
          <img src="\Images\students-studying-DbLGuwF_.jpeg" alt="Student Studiying" width="600"/>
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
          <br/>
          <center>
            <p>Ready to explore our courses?</p>
            <a href="/courses" className="course-btn">Explore Courses</a>
          </center>
         
    </div>
    </div>
  )
}

export default HomePage;
