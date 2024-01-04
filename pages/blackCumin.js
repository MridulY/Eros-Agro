import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "09093119" },
    { label: "GRADE", value: "MACHINE CLEANED & SORTEX CLEANED" },
    { label: "PURITY", value: "98%/99%/99.50%" },
    { label: "MOISTURE", value: "6 TO 7% MAX" },
    { label: "TOTAL ASH", value: "8% MAX" },
    { label: "PESTICIDE RESIDUE", value: "UNDER EU REGULATION" },
    { label: "AFLATOXIN (B1+B2+G1+", value: "BELLOW 5PPB" },
    { label: "SALMONELLA", value: "ABSENT/25GMS" },
    { label: "PACKING", value: "5/10/25/50 KG NET PP. & BRAND PACKING" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM" },
    { label: "LOADING CAPACITY", value: "16MT IN 20’FCL & 26MT IN 40’FCL" },
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

const BlackCumin = () => {
  
  return (
    <Layout>
      <PageBanner title={"Black Cumin"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/black_cumin.jpg"
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
                            <a href="#">SKU: OSo4 Category: Oil Seeds</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Black Cumin/Kalonji</h3>
                    <p>
                      Description 
                      We is heading a way as a exporter of Black
                      Cumin Seeds. As the health benefits are known to world
                      better, we provide globally the ultimate quality of Black
                      cumin seeds. The botanical name of Black Cumin Seeds also
                      known as Kalonji is Nigella sativa and it belongs to the
                      family Ranunculaceae. They are black in color and they can
                      be easily mistaken to be as Black Sesame Seeds. They are
                      native to South West Asia. The oil extract is believed to
                      be a nutritive application for hair. They are slightly
                      aromatic and have peppery flavor. It is believed that
                      black seeds are good for health. They are energy booster
                      and overcome fatigues. The oil extract is good for hair
                      growth. Specification
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

                <div className="comments-respond">
                  
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
export default BlackCumin;
