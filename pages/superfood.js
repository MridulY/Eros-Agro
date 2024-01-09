import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import Image from "next/image";

const SuperFoods = () => {
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
      <PageBanner title={"SuperFoods"} />
      <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>SuperFoods</h2>
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
                    src="/assets/images/spices/sweet_potato.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <a>Sweet Potato</a>
                  </h3>

                  <span className="price">
                    Sweet potatoes, often revered for their vibrant color and
                    sweet taste, are a powerhouse of nutrients packed into a
                    root vegetable. Originating from the morning glory family,
                    these tubers are a versatile and delicious addition to
                    various dishes.
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
                    src="/assets/images/spices/mixed_berry.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <a>Mixed Berry</a>
                  </h3>

                  <span className="price">
                    A delightful combination of natures sweetest gems, the mixed
                    berry blend includes strawberries, blueberries, raspberries,
                    and blackberries. Bursting with antioxidants, vitamins, and
                    fiber, this medley offers a flavorful punch and nutritional
                    goodness. Perfect for smoothies, desserts, or as a topping
                    for breakfast bowls, its vibrant colors and tangy sweetness
                    add a delightful touch to various culinary creations.
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
                    src="/assets/images/spices/almond.jpg"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <a>Natural Almonds</a>
                  </h3>

                  <span className="price">
                    Almonds are nutrient-rich nuts appreciated for their crunchy
                    texture and earthy flavor. High in healthy fats, protein,
                    vitamins, and minerals, they make for a satisfying and
                    nourishing snack. Whether raw, roasted, or flavored, almonds
                    are a versatile ingredient in baking, trail mixes, or simply
                    enjoyed on their own.
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
export default SuperFoods;
