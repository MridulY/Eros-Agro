import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "012074090" },
    { label: "PURITY LEVELS", value: "99/1/1 & 99.90% SORTEX CLEAN" },
    { label: "MOISTURE", value: "6% MAX" },
    { label: "OIL CONTENT", value: "48% MIN" },
    { label: "FFA", value: "2% MAX" },
    { label: "E-COIL", value: "NIL" },
    { label: "COLOR", value: "WHITISH" },
    { label: "TOTAL ASH", value: "9.5% MAX" },
    { label: "ADMIXTURE", value: "1% MAX" },
    { label: "SALMONELLA", value: "ABSENT/25GMS" },
    {
      label: "ORIGIN",
      value: "GUJARAT/RAJASTHAN/MADHYAPRADESH/UTTARPRADESH/W.BENGAL",
    },
    { label: "PACKING", value: "5/10/25/50 KG NET PP. & BRAND PACKING" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM" },
    { label: "LOADING CAPACITY", value: "19MT IN 20’FCL" },
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

const NaturalSesame = () => {
  return (
    <Layout>
      <PageBanner title={"Natural Sesame"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/natural.jpg"
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
                            <a href="#">SKU: OSo1 Category: Oil Seeds</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Natural Sesame</h3>
                    <p>
                      We are the exporter of premium quality, Sortex, carefully
                      macine cleaned natural sesame seeds. The packs of natural
                      sesame seeds ensure good health and purity with itself. We
                      have made to satiate the goodness of sesame seeds at
                      customer end. The botanical name of Natural Sesame Seeds
                      is Sesamum indicum and it belongs to family Pedaliaceae.
                      They are tiny, oval, flat seeds with nutty flavor. Natural
                      Sesame seeds are one of the oldest oil seeds known since
                      ages. It is believed that it has originated from Indian
                      sub continent. Natural Sesame Seeds are widely used in
                      making bakery items such as bread, cookies, bread sticks
                      etc. They are also used in some Indian curries. Tahini is
                      made out of natural sesame seeds and it is believed to be
                      a nutrient booster. Sesame seeds hold a great nutritional
                      value. It is enriched with calcium, phosphorus, protein
                      and fiber. It prevents High BP and rise in Cholesterol.
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
export default NaturalSesame;
