import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "TYPE", value: "REGULAR/STEAM STERLIZED" },
    { label: "HS CODE", value: "09109929" },
    { label: "COLOR", value: "YELLOWISH ORANGE" },
    { label: "MOISTURE", value: "8% max" },
    { label: "TOTAL ASH", value: "7% max" },
    { label: "ACID INSOLUBLE ASH", value: "1%" },
    { label: "MESH SIZE", value: "60-80" },
    { label: "TOTAL PLATE COUNT", value: "MAX 100000/GM" },
    { label: "COLIFORMS", value: "NIL" },
    { label: "E-COIL", value: "NIL" },
    { label: "YEAST & MOLDS", value: "NIL" },
    { label: "SALMONELLA", value: "NIL/25GM" },
    { label: "AFLATOXIN", value: "BELLOW 5PPB" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM, SPICE BOARD" },
    { label: "LOADING CAPACITY", value: "15MT IN 20'FCL & 25MT IN 40'FCL" },
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

const CurryPowder = () => {
  return (
    <Layout>
      <PageBanner title={"Curry Powder"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/curry_powder.jpg"
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
                            <a href="#">SKU: BSo6 Category: Blended Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Curry Powder/Garam Masala</h3>
                    <p>
                      Curry Powder/ Garam masala the name simply means warm
                      blends of spices. While preparing this mixture, each
                      ingredient is selected carefully in its correct form and
                      precise amount to get the most relishing taste. While some
                      masala are available HOT and some are mild, we totally
                      avoid this dilemma and make a taste that is suitable to
                      all. In short we can say that Garam masala/Curry masala is
                      a world of spices brought together to give your taste buds
                      an awesome treat. It is added in delicacies to enhance
                      taste and aroma that are incomparable.
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
export default CurryPowder;
