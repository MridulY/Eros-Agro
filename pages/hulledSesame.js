import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "012074090" },
    { label: "PURITY LEVELS", value: "99.90%/99.95%/99.97%/99.99%" },
    { label: "MOISTURE", value: "4% MAX" },
    { label: "OIL CONTENT", value: "48% MIN" },
    { label: "ADMIXTURE", value: "1%/0.03%/0.02%" },
    { label: "E-COIL", value: "NIL" },
    { label: "COLOR", value: "MILKY WHITE" },
    { label: "AFLATOXIN (B1+B2+G1+)", value: "BELLOW 4PPB" },
    { label: "SALMONELLA", value: "ABSENT/25GMS" },
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

const HulledSesame = () => {
  return (
    <Layout>
      <PageBanner title={"Hulled Sesame"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/hulled.png"
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
                            <a href="#">SKU: OSo2 Category: Oil Seeds</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Hulled Sesame</h3>
                    <p>
                      Hulled sesame seeds are India’s owns harvesting product
                      since years. We brings to you the premium quality Hulled
                      sesame seeds with Auto Dried process. Hulled Sesame Seeds
                      are Source of most nutritious seeds because of its
                      proteins and valuable minerals. The husk hull (upper skin)
                      of these seeds are removed hence are called as Hulled
                      Sesame Seeds. The botanical name of Natural Sesame Seeds
                      is Sesamum indicum and it belongs to family Pedaliaceae.
                      Finest quality of natural sesame seeds are dried and
                      hulled mechanically. Natural sesame seeds can be sundried
                      too to get hulled sesame seeds. Sesame seeds are oxidative
                      and hence can reverse the liver damage. In Arabian
                      countries, Tahini is mixed with Date syrup to make sweet
                      drink. Hulled Sesame Seeds are widely used in breads,
                      burgers, sauces, cereals, crackers, spreads, drinks,
                      granola, candies,food dish garnishing & various other
                      bakery and confectionary products to enrich its taste and
                      nutritional values.
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
export default HulledSesame;
