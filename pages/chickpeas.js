import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "09109990" },
    { label: "COLOR", value: "BROWNISH, BROWNISH YELLOW" },
    { label: "TYPE", value: "98%/99% MACHINE CLEAN & SORTEX" },
    { label: "SHAPE", value: "ELIPTICAL" },
    { label: "MOISTURE", value: "13% MAX" },
    { label: "LENGTH", value: "2.5-7.5CM" },
    { label: "WIDTH", value: "1.6-2.5CM" },
    { label: "VOLATILE OIL", value: "1.5% MAX" },
    { label: "ASH", value: "4% MAX" },
    { label: "ACID INSOLUBLE ASH", value: "0.8% MAX" },
    { label: "ORIGIN", value: "ARUNACHAL PRADESH/SIKKIM" },
    { label: "PACKING", value: "5/10/25/50 KG NET PP. & BRAND PACKING" },
    { label: "QUALITY ASSURANCE", value: "GEO-CHEM" },
    { label: "LOADING CAPACITY", value: "7MT IN 20’FCL" },
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

const Chick = () => {
  return (
    <Layout>
      <PageBanner title={"ChickPeas"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/chickpeas.jpg"
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
                            <a href="#">SKU: OPo2 Category: Other Products</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">ChickPeas</h3>
                    <p>
                      We are the exporter of Chickpea/Kabuli Chana globally. The
                      beans are assorted well, cleaned and hygienically packed.
                      Chickpea has nutritive values & rich in protein and fiber
                      as well, which well maintained while mechinally processing
                      to sort the best chickpea to serve best of it. The
                      botanical name of Chickpea/ Kabuli chana is Cicer
                      arietinum-garbanzo and it belongs to Fabaceae Family. They
                      are considered as legumes. They are light brown, looks
                      like Hazelnut in shape, small and hard. It has minimum fat
                      content and thus considered as healthy. Chickpeas mostly
                      used as boiled or a paste can be made to be used in
                      different cuisines. Chickpeas have tasty flavor. They can
                      be used in making curry which is a very popular dish in
                      India. Moreover it can be used in making healthy salad
                      along with vegetables. Middle Eastern countries make Humus
                      out of Chickpea paste that is applied over Pita bread to
                      make Falafal rolls.
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
export default Chick;
