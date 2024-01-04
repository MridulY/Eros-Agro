import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "012074090" },
    { label: "PURITY LEVELS", value: "99/1 SORTEX, Z BLACK SORTEX" },
    { label: "MOISTURE", value: "4-6% MAX" },
    { label: "OIL CONTENT", value: "48% MIN" },
    { label: "ADMIXTURE", value: "1%/0.03%/0.02%" },
    { label: "FFA", value: "1-2% MAX" },
    { label: "COLOR", value: "BLACK SEEDS" },
    { label: "AFLATOXIN (B1+B2+G1+G2)", value: "BELLOW 4PPB" },
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

const BlackSesame = () => {
  return (
    <Layout>
      <PageBanner title={"Black Sesame"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/nlack_sesame.jpg"
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
                            <a href="#">SKU: OSo3 Category: Oil Seeds</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Black Sesame</h3>
                    <p>
                      We are the exporter of rich quality of Black Sesame Seeds.
                      They are globally well known for its traditionally
                      selected nutrient rich black sesame seeds. The botanical
                      name of Black Sesame Seeds is Sesamum indicum and it
                      belongs to family Pedaliaceae. They are spherical in shape
                      and black in color. They are nutty in taste. Black Sesame
                      seeds are having high amount of oils content in them. They
                      are loaded with nutrients. They have higher level of anti
                      oxidants comparatively. Black sesame seeds are mainly used
                      in extracting oil which has many health benefits. They are
                      used as sprinklers on vegetables, noodles or for
                      garnishing starters. The powder of black sesame seeds has
                      strong flavor and taste. Black sesame seeds can be roasted
                      to be eaten as it is or its oil can be used to cure many
                      diseases.
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
export default BlackSesame;
