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

const Psyllum = () => {
  return (
    <Layout>
      <PageBanner title={"Psyllum Husk"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/psyllum.jpg"
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
                            <a href="#">SKU: OPo4 Category: Other Products</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Psyllum Husk & Powder</h3>
                    <p>
                      We are the exporter of Psyllum Husk. We provide husk fiber
                      globally keeping its freshness and goodness intact. The
                      botanical name of Psyllum husk is Plantago Scraba. It is a
                      member of a plant name Plantago. It is commonly known as
                      isabgol. Psyllum Husk is the outer portion of the seed of
                      the plant. It is extremely hygroscopic hence it can absorb
                      water much more than its weight. It has been originated
                      from Mediterranean region but nowadays it is cultivated in
                      North Gujarat, West Rajasthan and some states of North
                      India. Basically, Psyllum husk is very old herb that is
                      used since ancient time as laxative. It is completely
                      natural anti diarrheic. It is very fibrous; it throws
                      toxins out of the intestine and stomach. It is top herb
                      that is used in weight control. It is used for thickening
                      ice cream. It is generally consumed after soaking it in
                      the water.
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
export default Psyllum;
