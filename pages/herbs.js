import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import Image from "next/image";

const Herbs = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post-item", sort, active);
    let list = document.querySelectorAll(".blog-post-item");
    setstate(getPagination(list.length, sort));
  }, [sort, active]);
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Herbs"} />
      <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Herbs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                data-wow-delay="10ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/peppermint.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                      <a>PepperMint</a>
                  </h3>

                  <span className="price">
                    Peppermint is a perennial herb known for its refreshing
                    aroma and cooling sensation. Widely used in teas, it offers
                    digestive benefits and is a natural remedy for indigestion
                    and upset stomach. Peppermint oil, extracted from its
                    leaves, is used in aromatherapy, personal care products, and
                    as a flavoring agent in food and beverages.
                  </span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05"> +91 9914826464</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-user"></i>Eros_Agro
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                data-wow-delay="20ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/lavender.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                      <a>Lavender</a>
                  </h3>

                  <span className="price">
                    Lavender is a flowering plant known for its fragrant flowers
                    and soothing properties. Its commonly used in aromatherapy
                    and herbal medicine due to its calming effects. Lavender is
                    also utilized in various skincare products and as a culinary
                    herb in cooking and baking, adding a unique floral flavor to
                    dishes.
                  </span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05"> +91 9914826464</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-user"></i>Eros_Agro
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                data-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/turmeric_herb.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                      <a>Turmeric</a>
                  </h3>

                  <span className="price">
                    Turmeric is a vibrant yellow-orange spice derived from the
                    root of the Curcuma longa plant. Its prized for its potent
                    anti-inflammatory and antioxidant properties. Commonly used
                    in traditional medicine, turmeric has gained popularity in
                    modern wellness practices.
                  </span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05"> +91 9914826464</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-user"></i>Eros_Agro
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Herbs;
