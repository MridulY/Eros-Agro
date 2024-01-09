import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "TYPE", value: "REGULAR/ORGANIC/STEAM STERLIZED" },
    { label: "HS CODE", value: "09103030" },
    { label: "MOISTURE", value: "12%MAX" },
    { label: "TOTAL ASH", value: "9.5%" },
    { label: "ACID INSOLUBLE ASH", value: "1%" },
    { label: "MESH SIZE", value: "20-60MM" },
    { label: "AROMA", value: "EARTHY" },
    { label: "para red, Rhodamin B, Butter yellow", value: "ABSENT" },
    { label: "Orange 2, Orange B & G", value: "ABSENT" },
    { label: "Sudan 1,2,3,4", value: "ABSENT" },
    { label: "AFLATOXIN", value: "BELLOW 5PPB" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM, SPICE BOARD" },
    { label: "LOADING CAPACITY", value: "15MT IN 20’FCL & 25MT IN 40’FCL" },
    { label: "PACKING", value: "25/50 KG. NEW MULTI WALL PAPER BAG" },
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

const Turmeric = () => {
  return (
    <Layout>
      <PageBanner title={"Turmeric Powder"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/turmeric.jpg"
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
                            <a href="#">SKU: BSo5 Category: Blended Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Turmeric Powder</h3>
                    <p>
                      We are the exporter of selectively chosen turmeric root
                      Fingers that can be blended with technology and
                      machineries to make finest turmeric powder. We strive to
                      keep the natural aroma and purity as it is when doing the
                      process. It is packed carefully to maintain its rich
                      properties. <strong>Key features of the finest quality is its
                      Curcumin content value & color which attracts Kitchen
                      across the globe</strong>. Turmeric is the most common and ancient
                      spice of Indian culture. It is one of the main spices used
                      in making Indian curry. It imparts bright yellow color to
                      food. It has warm properties and gives a tinge or aroma to
                      food. It is widely used in making sauces and pickles. It
                      is made by grounding finely dried turmeric roots. The
                      turmeric powder has number of amazing benefits. It is
                      known to have an immunity building property. It is natural
                      antiseptic.
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
export default Turmeric;
