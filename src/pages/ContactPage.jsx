import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
      <div className="color">
        <div className="page-container" style={{overflow:"auto"}}>
          <Header/>
            <center>
              <h1>Contact Us</h1><hr/>
            </center>
            <p>
            We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2>General Enquiries</h2>
            <hr/>
            <p>
            <b>Vivekanand College Main Campus</b><br/>
            [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br/>
            India<br/>
            Phone: +91 12345 67890<br/>
            Email: info@vivekanandcollege.edu<br/>
            Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br/>
            </p>
            <h2>Admissions Office</h2>
            <p>
            For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
            Phone: +91 98765 43210<br/>
            Email: admissions@vivekanandcollege.edu<br/>
            </p>
            <h2>Student Support Services</h2>
            <hr/>
            <p>
            For current student support, academic advising, or general assistance:<br/>
            Phone: +91 87654 32109<br/>
            Email: studentsupport@vivekanandcollege.edu<br/>
            </p>
            <h2>Find Us on the Map</h2>
            <a href="https://www.google.com/maps/place/Vivekanand+College/data=!4m7!3m6!1s0x3bc100664ad0e191:0x4b2af9253659bbec!8m2!3d16.7123502!4d74.2386097!16s%2Fg%2F11f_zngrbh!19sChIJkeHQSmYAwTsR7LtZNiX5Kks?authuser=0&hl=en&rclk=1">view on Google Map</a>
            <hr/>
            <h2>Send Us a Message</h2>
            <p>
              [A contact form with fields for Name, Email, Subject, Message can be added here.]
            </p>
        </div>
        </div>
    )
}

export default ContactPage;