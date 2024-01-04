import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "KIND", value: "TEJA CHILI/S4 SANNAM/273 WRINKLE" },
    { label: "HS CODE", value: "09042219" },
    { label: "COLOR VALUE", value: "35-100 MAX ASTA" },
    { label: "MESH SIZE", value: "2MM TO 6MM" },
    { label: "SHU LEVEL", value: "9000-75000" },
    { label: "SEEDS %", value: "5-30% MAX" },
    { label: "MOISTURE", value: "10-12% MAX" },
    { label: "AFLATOXIN", value: "5-30PPB MAX" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM, SPICE BOARD" },
    { label: "LOADING CAPACITY", value: "16MT IN 20’FCL & 25MT IN 40’FCL" },
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

const ChilliFlakes = () => {
  return (
    <Layout>
      <PageBanner title={"Chilli Flakes"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/chilli_flakes.jpg"
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
                            <a href="#">SKU: BSo2 Category: Blended Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Chilli Flakes</h3>
                    <p>
                      We are the exporter of fresh Indian red chilli flakes of
                      best quality. They are packed in tamper proof container so
                      that the freshness is totally sealed. Its also known as
                      “PAPRIKA”, ITS prepared from mild red chili pepper, its
                      flavor ranges from Hot to Mild, Paprika is equally valued
                      for its taste and its bright red colour, derived from
                      capsanthin. Dry Chilli flakes is a condiment consisting of
                      dried and crushed chilli peppers. Nowadays it shares table
                      space along with salt and pepper in many hotels and
                      restaurants, as to enhance visual apperence of dish as
                      well. Chilli flakes is a must ingredient in Mexican and
                      Italian cuisines. When food is topped up with chilli
                      flakes, the food taste is elevated to just another level.
                      It has become a convenient choice to add heat to flavor up
                      your pizza or curry with Indian Red Chilli Flakes.
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
export default ChilliFlakes;
