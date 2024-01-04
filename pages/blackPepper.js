import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "TYPE", value: "REGULAR/ORGANIC/STEAM STERLIZED" },
    { label: "HS CODE", value: "09041190" },
    { label: "MOISTURE", value: "12% MAX" },
    { label: "ASH", value: "1%" },
    { label: "MESH SIZE", value: "20-60MM" },
    { label: "SALMONELLA", value: "ABSENT/25GMS" },
    { label: "FLAVOR", value: "Aromatic with a penetrating flavor" },
    { label: "QUALITY ASSURANCE", value: "SGS, GEO-CHEM, SPICE BOARD" },
    { label: "LOADING CAPACITY", value: "15MT IN 20’FCL & 25MT IN 40’FCL" },
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

const BlackPepper = () => {
  return (
    <Layout>
      <PageBanner title={"Black Pepper"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/black_pepper_powder.jpg"
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
                            <a href="#">SKU: BSo4 Category: Blended Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Black Pepper</h3>
                    <p>
                      WWe are the exporter of India’s own harvesting product-
                      the best quality of Black Pepper powder. Invite the
                      wellness pack. Black pepper powder is known widely today
                      globally for its pungency, distinct aroma and as a HEAT
                      ingredient. It’s a noble Indian spice with excellent
                      taste, relishing flavor, superb aroma and health benefits.
                      Black pepper powder is used in cooking and garnishing in
                      cuisines around the world. When it is added over a pizza,
                      it gives a unique hot flavor that’s totally finger licking
                      good. Freshly cut fruits and vegetables tastes amazing
                      when topped up with salt and Black Pepper. In today’s era,
                      people are health conscious and they have known the health
                      benefits of black pepper powder. It is a common sprinkler
                      of salads and fruit dishes. It’s addition enhances rich
                      flavor to food keeping its nutritional value intact. It
                      has been known to prevent cancer, stimulate digestion,
                      relieve from cough and cold and many others.
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
export default BlackPepper;
