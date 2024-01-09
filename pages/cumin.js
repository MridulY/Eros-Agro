import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "09109929" },
    { label: "TYPE", value: "REGULAR/ORGANIC/STEAM STERLIZED" },
    { label: "MOISTURE", value: "10% MAX" },
    { label: "ACID INSOLUBLE ASH", value: "0.5% MAX" },
    { label: "MESH SIZE", value: "20-60MM" },
    { label: "SALMONELLA", value: "ABSENT/25GMS" },
    { label: "FLAVOUR", value: "Aromatic with a penetrating flavor" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM, SPICE BOARD" },
    { label: "LOADING CAPACITY", value: "18MT IN 20’FCL & 26MT IN 40’FCL" },
    { label: "PACKING", value: "10/25/50 KG. NEW MULTI WALL PAPER BAG" },
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

const Cumin = () => {
  return (
    <Layout>
      <PageBanner title={"Cumin Powder"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/cumin_powder.jpg"
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
                            <a href="#">SKU: BSo3 Category: Blended Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Cumin Coriander Powder</h3>
                    <p>
                      We are the exporter of Cumin-Coriander powder. It serves
                      one of the richly blended powders with freshness and
                      purity. Cumin-Coriander powder is yet another choice for
                      Indian cuisines. In fact it is mandatory Ingredient to
                      prepare flavorful and richly aromatic delicacies. It is
                      also a most common spice of Indian kitchen.
                      Cumin-Coriander spice powder is a blend of finest quality
                      of Coriander seeds and Cumin seeds harvest from organic
                      farms. Besides pouring taste in the Indian food, they
                      blend well with the gravy and veggies to give a unique
                      texture and consistency. Moreover, it is good for health.
                      The blended powder has carminative property. It enhances
                      metabolism and keeps good health.
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
export default Cumin;
