import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "09071090" },
    { label: "QUALITY", value: "SUPERIOR & HANDPICKED" },
    { label: "COLOR", value: "REDDISH BROWN" },
    { label: "SIZE", value: "HOMOGENEOUS CG3" },
    { label: "MOISTURE", value: "11% MAX" },
    { label: "STEMS", value: "1-2% MAX" },
    { label: "Foreign Matter", value: "1% MAX" },
    { label: "ORIGIN", value: "KERALA, TAMILNADU, KARNATAKA" },
    { label: "PACKING", value: "10/15/25 KG NET PP BAG" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM, bureau veritas" },
    { label: "LOADING CAPACITY", value: "11MT IN 20’FCL" },
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

const Cloves = () => {
  return (
    <Layout>
      <PageBanner title={"Cloves"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/cloves.jpg"
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
                            <a href="#">SKU: WSo6 Category: Whole Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Cloves</h3>
                    <p>
                      We are the exporter of best quality handpicked cloves. The
                      premium packing assures that is aroma and flavor remains
                      intact. Our superb quality cloves are selected and
                      handpicked for sustaining its purity. The botanical name
                      of Clove is Syzygium aromaticum and it belongs to
                      Myrtaceae family. Cloves are unopened flower bud of a
                      tropical tree. It has derived its name from Latin meaning
                      nails. Cloves are native to Maluku Island in Indonesia.
                      Cloves are mainly added with other aromatic spices to
                      impart flavor and strong aroma to the dishes. Cloves have
                      the ability to overpower the taste; hence it has to be
                      added in dishes in small amount only. Cloves are used as
                      hooks to bind rotis, vegetables, betelnut leaves or samosa
                      ets. It is commonly used in making rice as it gives rich
                      aroma and flavor.
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
export default Cloves;
