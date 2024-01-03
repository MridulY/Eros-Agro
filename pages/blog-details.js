import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner title={"Blog Single"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/spices/top_12.jpg"
                      alt="Blog Image"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">No Comment</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-id-badge" />
                            <a href="#">Eros_Spices</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-calendar" />
                            <a href="#">22 Nov, 2022</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      A short presentation of coriander seeds
                    </h3>
                    <p>
                      Dried seeds or natural product got from the plant
                      Coriandum Sativum are called coriander seeds or dhaniya
                      from the parsley family. Since old times, coriander seed
                      has been a particular fixing utilized for culinary
                      purposes. Coriander seeds add warm and hearty tones
                      alongside a citrus flavor to your home-prepared food. New
                      coriander is reviving and somewhat sweet, though, then
                      again, coriander seeds leave hearty and tart flavor
                      trailing sensation on the tongue.
                    </p>
                    <h3 className="title">
                      Coriander seeds benefits for wellbeing:
                    </h3>
                    <p>
                      The cell reinforcement properties and dietary fiber in
                      coriander seeds assist with working on your digestion and
                      stomach related wellbeing. It likewise proves to be useful
                      for treating issues that are normally connected with
                      processing, for instance, bulging, heartburn, and
                      clogging, notwithstanding some more.
                    </p>
                    <h4>
                      Coriander Assists with keeping up with glucose levels
                    </h4>
                    <p>
                      Coriander seeds are brimming with ethanol, known for
                      diminishing glucose levels and consequently assist with
                      keeping glucose levels stable. Coriander seeds likewise
                      assist with protecting insulin action, prompting keeping
                      up with glucose levels on a check.
                    </p>
                    <h4>Helps in Coronary illness</h4>
                    <p>
                      Coriander seeds are wealthy in copper, zinc, iron, and a
                      lot more huge minerals to raise the quantity of RBCs and
                      lift heart wellbeing. It helps increment digestion, which
                      supports a superior and better heart. A solid heart
                      prompts a more joyful and fitter way of life.
                    </p>
                    <h4>Keeps up with cholesterol</h4>
                    <p>
                      As indicated by research, coriander seeds assist with
                      expanding HDL, i.e., great cholesterol, and decrease LDL,
                      i.e., the awful cholesterol. Two tablespoons of coriander
                      seeds in a glass of water consistently would assist with
                      holding your cholesterol under wraps. Better cholesterol
                      levels help in better heart wellbeing also.
                    </p>
                    <h4>Battling food contamination</h4>
                    <p>
                      Coriander seeds don’t simply make your food more delicious
                      yet additionally assist with combatting food contamination
                      too. A synthetic called dodecenal found in coriander seeds
                      lessens hurtful microorganisms named salmonella, which is
                      the reason for both norm and lethal food contamination.
                      Dodecenal has been viewed as a more powerful option in
                      contrast to killing microorganisms than anti-infection or
                      gentamicin utilized regularly.
                    </p>
                    <h4>Coriander helps for solid vision</h4>
                    <p>
                      Coriander seeds are thickly plentiful in vitamin A joined
                      by cell reinforcements that have a place with the
                      carotenoid class, which works on your visual perception.
                      Coriander seeds are additionally useful in repulsing
                      conjunctivitis and advanced age-related degenerative
                      problems in regards to vision.
                    </p>
                    <h4>Coriander seeds as Against disease specialist</h4>
                    <p>
                      Coriander seeds have cell reinforcement and mitigating
                      properties, which assist with lessening the development of
                      disease cells in the stomach, prostate, colon, bosom, and
                      lungs. Linalool found in coriander seeds influences the
                      safe framework and assist with safeguarding crucial organs
                      against irresistible illnesses.
                    </p>
                    <h4>Helping resistance</h4>
                    <p>
                      There are cell reinforcements present in coriander seeds
                      known for working on your resistance. Anybody with secure
                      invulnerability can really battle free extreme harm. A
                      solid invulnerability empowers you to overcome
                      contaminations or sicknesses, and coriander seeds can
                      assist you with accomplishing it.
                    </p>
                    <h5>
                      To summarize everything, coriander seeds with Indian
                      flavors make your food more delicious and assist you with
                      forestalling a plenty of infections as it is brimming with
                      significant and sound supplements. From solid skin to
                      forestalling heart illnesses, coriander seeds offer
                      plentiful advantages to your body. Consuming a sound
                      measure of coriander seeds might actually be great for
                      your wellbeing.
                    </h5>
                    
                  </div>
                </div>
                <div className="post-navigation">
                  <div className="row">
                    
                    <div className="col-md-6">
                      <div className="next-post post-nav-item">
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="comments-respond">
                  <h4 className="comments-heading mb-20">Write a Review</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            name="message"
                            placeholder="Write Message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Type your email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_checkbox">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check1"
                              name="checkbox"
                              defaultChecked=""
                            />
                            <label htmlFor="check1">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                
                
                
                
                <div className="widget tag-cloud-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Tag</h4>
                  <a href="#">Blended Spices</a>
                  <a href="#">Oil Seeds</a>
                  <a href="#">Whole Spices</a>
                  <a href="#">Other Products</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
