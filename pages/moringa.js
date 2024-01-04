import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "09109990" },
    { label: "COLOR", value: "GREENISH, GREENISH YELLOW" },
    { label: "TYPE", value: "98%/99% MACHINE CLEAN & SORTEX" },
    { label: "SHAPE", value: "ELIPTICAL" },
    { label: "MOISTURE", value: "13% MAX" },
    { label: "LENGTH", value: "2.5-7.5CM" },
    { label: "WIDTH", value: "1.6-2.5CM" },
    { label: "VOLATILE OIL", value: "1.5% MAX" },
    { label: "ASH", value: "4% MAX" },
    { label: "ACID INSOLUBLE ASH", value: "0.8% MAX" },
    { label: "ORIGIN", value: "ARUNACHAL PRADESH/SIKKIM" },
    { label: "PACKING", value: "5/10/25/50 KG NET PP. & BRAND PACKING" },
    { label: "QUALITY ASSURANCE", value: "GEO-CHEM" },
    { label: "LOADING CAPACITY", value: "7MT IN 20’FCL" },
  ];

  return (
    <div>
      <h2>Product Details</h2>
      <table>
        <tbody>
          {productDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.label}</td>
              <td>{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Moringa = () => {
  return (
    <Layout>
      <PageBanner title={"Moringa"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/moringa.jpg"
                      alt="Blog Image"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-id-badge" />
                            <a href="#">Eros_Spices</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-tag" />
                            <a href="#">SKU: OPo6 Category: Other Products</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Moringa Seeds/Leaf/Powder</h3>
                    <p>
                      We are the processor and exporter of supreme quality of
                      Moringa seeds, Moringa Powder & its oil. Moringa seed is
                      an important part of Moringa tree, because it contain
                      large amount of protein and iron in it. Moringa seed is
                      present inside the Moringa Pods. Moringa seed is like
                      round shaped. From one Moringa pods we can get more than 5
                      number of seeds. We Process and supply multi grade/variety
                      like pkm-1 moringa cultivation seeds, pkm-2 cultivation
                      seeds, km-1 seeds, moringa traditional seeds, moringa oil
                      seeds, moringa medicinal seeds, moringa pharma grade
                      seeds. Its botanical name is Moringa oleifera, its only
                      genus in the plant family Moringacae. Its widely
                      harvesting southwestern India.,Each & Every part of this
                      plant is used in variety of applications including Food,
                      personal & health care, agriculture,dye, water
                      purification and many more. Its significant & high valued
                      source of vitamin-B, vitamin-C, & provitamin-A as
                      beta-carotene, vitamin-k, proteins & other essential
                      nutrients. Its greenish leaf cooked & used as we use
                      Spinach in Various Delicious Dishes, & also used in soups
                      & sauces by crushing in powder. Its Immature seeds pods,
                      also called Drumsticks, which used in south asian dishes
                      by parboiling & cooked in curry. Its seeds mostly consumed
                      like roasted peanuts, peas & nuts, which consists high
                      level of vitamin-C & vitamin-B. Its also yield oil around
                      40%, used as edible oil, called Ben oil, because of its
                      higher concentration of behenic acid. Its refined oil is
                      much clear & odorless. As medicinal value of moringa
                      oleifera had been suggested by traditional medicine,
                      further clinical testing is required to explore more
                      benefits.
                    </p>
                  </div>
                </div>
                <ProductDetails />
                <div className="post-navigation">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="next-post post-nav-item"></div>
                    </div>
                  </div>
                </div>

                <div className="comments-respond"></div>
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
export default Moringa;
