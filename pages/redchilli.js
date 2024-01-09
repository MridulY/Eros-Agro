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

const RedChili = () => {
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
                      src="/assets/images/spices/red_chilli.jpg"
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
                            <a href="#">SKU: BSo1 Category: Blended Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Red Chilli Powder</h3>
                    <p>
                      We have adapted the best methods in the blended red chilli
                      powder. The packet of goodness reaches not only India but
                      across the world. India own harvesting product; Red Chilli
                      powder is packed keeping its purity and richness intact.
                      Red Chilli powder is commonly known as “lal mirch powder”
                      and it is one of the key ingredients in the preparation of
                      Indian cuisines. It is one of the main members of spice
                      catalogue because Indians dishes are said to be incomplete
                      without the flavor of Red chilli powder. The authentic
                      Indian cuisines are incomplete without the touch of Red
                      Chilli Powder in them. When you have one of the finest
                      handpicked and selected whole chillies that are grounded
                      with traditional methods and modern techniques, it will
                      just come as one of the most aromatic, pungent smelling
                      and really HOT blended Red Chilli Powder. Red Chilli
                      powder is a dominating amongst many Indian spices. If the
                      food is tempered with red chillies powder, its aroma can
                      spread far off. It gives an appealing red color to
                      delicacies with mouthwatering flavor and irresistible
                      aroma.
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
export default RedChili;
