import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "09109914" },
    { label: "GRADE", value: "MACHINE CLEANED & SORTEX CLEANED" },
    { label: "PURITY", value: "98%/99%/99.50% BOLD & SMALL" },
    { label: "MOISTURE", value: "7 TO 8% MAX" },
    { label: "TOTAL ASH", value: "6-8% MAX" },
    { label: "SALMONELLA", value: "ABSENT/25GMS" },
    { label: "PACKING", value: "5/10/25/50 KG NET PP. & BRAND PACKING" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM" },
    { label: "LOADING CAPACITY", value: "24MT IN 20’FCL & 26MT IN 40’FCL" },
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

const BlackMustard = () => {
  return (
    <Layout>
      <PageBanner title={"Black Mustard"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/black_mustard.jpg"
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
                            <a href="#">SKU: OSo5 Category: Oil Seeds</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Black Mustard Seeds</h3>
                    <p>
                      We are the exporter of Black Mustard Seeds. The seeds are
                      packed with its richness and goodness for you to open it
                      up. We bring you the supreme quality of seeds that
                      satiates the end user. The botanical name of black mustard
                      seeds is Brassica nigra and it belongs to the family
                      Brassicaceae. They are small, round, black or dark brown
                      in color. They are native to Middle East but as of now,
                      they are cultivated widely in India. They are commonly
                      known Sarson. Black mustard seeds are mostly used in
                      tempering food. The seeds are added to warm cooking oil
                      which then pops up to add rich flavor and aroma. Mustard
                      sauce is commonly used these days as salad dressing. Black
                      mustard seeds can be roasted to make it into powder to add
                      to pickles. They seeds are bitter in taste; hence when
                      powdered, it should be carefully used. Mustard seeds help
                      in increasing appetite. They can neutralize toxins. They
                      are a good source of minerals and Omega-3 fatty acids.
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
export default BlackMustard;
