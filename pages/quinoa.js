import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "10085000" },
    { label: "PURITY LEVELS", value: "99/1 SORTEX" },
    { label: "COLOR", value: "CREAM WHITE" },
    { label: "MOISTURE", value: "8% MAX" },
    { label: "ASH", value: "4.5% MAX" },
    { label: "CONTRAST GAINS", value: "2% MAX" },
    { label: "E-COLI", value: "ABSENT" },
    { label: "AFLATOXIN (B1+B2+G1+G2)", value: "AS PER EU STANDARDS" },
    { label: "SALMONELLA", value: "ABSENT/25GMS" },
    { label: "PACKING", value: "5/10/25/50 KG NET PP. & BRAND PACKING" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM" },
    { label: "LOADING CAPACITY", value: "20MT IN 20’FCL" },
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

const Quinoa = () => {
  return (
    <Layout>
      <PageBanner title={"Quinoa"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/quonina.jpg"
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
                            <a href="#">SKU: OPo5 Category: Other Products</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Quinoa Seeds</h3>
                    <p>
                      We are an exporter of Quinoa seeds across the world. These
                      seeds are very nutritive and we have been successful in
                      keeping their nutrition intact. In today’s world, it is
                      known as Super Food. The botanical name of Quinoa Seeds is
                      Chenopodium quinoa and it belongs to Amaranthaceae Family.
                      These are tiny seeds and mostly white to red or black in
                      color. They are origins of Peru and Bolivia, India. The
                      herbaceous plant is cultivated for its use of seeds. They
                      are pronounced as ‘keen waah’. They have their own rich
                      taste. Quinoa seeds can be added in vegetable salad to
                      make healthier. It can be an option for rice which is
                      healthy and high calorie free. They are used as a stuffing
                      in some of the veg and non veg recipes. Quinoa seeds are
                      innovatively used for making cookies and pancakes. They
                      can be dry roasted to make health snack bars. Quinoa seeds
                      are very healthy. They are packed with protein, fiber and
                      essesntial amino acids. They contain rich anti oxidants in
                      them. They are gluten free and super rich in fiber
                      content. It has low Glycemic Index which means it controls
                      blood sugar. Use of the seeds make us healthier.
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
export default Quinoa;
