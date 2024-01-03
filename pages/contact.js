import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageBanner title={"Contact us"} />

      {/*====== Start Contact Section ======*/}
      <section className="contact-section pt-115 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="section-title section-title-left mb-50">
                <span className="sub-title">Contact Us</span>
                <h2>Connect With Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-information-list">
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-location-pin" />
                  </div>
                  <div className="info">
                    <h5>Address</h5>
                    <p>
                      Eros Agro, C/O Eros Trading Company Village Bajra, Rahon
                      Road, Ludhiana, Punjab - 141007
                    </p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-mobile" />
                  </div>
                  <div className="info">
                    <h5>Phone</h5>
                    <p>
                      <a href="tel:445555552580">
                        Mr. Navjot Singh (Owner) - +91-9914826464
                      </a>
                    </p>
                    <p>
                      <a href="tel:445555552580">
                        Ms. Charanpreet Kaur (Business Development Manager) -
                        +91-9878660464
                      </a>
                    </p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-email" />
                  </div>
                  <div className="info">
                    <h5>Email</h5>
                    <p>
                      <a href="mailto:info@fioxen20.com">export@erosagro.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-wrapper-one mb-30 wow fadeInRight">
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="First Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Last Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Phone"
                            name="phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Subject"
                            name="subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Your Message"
                            name="message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Map section ======*/}
      <section className="contact-page-map">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27370.682376700264!2d75.885101!3d30.961123999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a84a0c9a272cd%3A0x9d101b54fc6fa8df!2sEros%20Trading%20Company!5e0!3m2!1sen!2sus!4v1704259862392!5m2!1sen!2sus"
          ></iframe>
        </div>
      </section>
      {/*====== End Map section ======*/}
    </Layout>
  );
};
export default Contact;
