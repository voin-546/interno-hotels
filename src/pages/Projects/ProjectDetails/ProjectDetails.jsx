import { Helmet } from "react-helmet";
import Footer from "../../../Components/Footer";
export default function ProjectDetails () {
    return (
        <>
            <Helmet>
                <title>Project Details</title>
            </Helmet>
            <section className="project-details-hero"></section>
            <section className="info">
                <div className="container">
                    <div className="info-text">
                        <div>
                            <h3>Client</h3>
                            <span>James Rodriguez</span>
                        </div>
                        <div>
                            <h3>Category</h3>
                            <span>Interiors</span>
                        </div>
                        <div>
                            <h3>Tags</h3>
                            <span>Interior, Home</span>
                        </div>
                        <div>
                            <h3>Date</h3>
                            <span>23.02.2022</span>
                        </div>
                        <div>
                            <h3>Link</h3>
                            <a href="https://jamesrodriguez@gmail.com" target="_blank" rel="noreferrer">jrodri@gmail.com</a>
                        </div>
                    </div>
                    <div className="text">
                        <h1 data-aos="fade-up">Minimal Look Bedrooms</h1>
                        <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="400">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}