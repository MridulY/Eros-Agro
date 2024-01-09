import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "010082920" },
    { label: "COLOR", value: "GREENISH YELLOW" },
    { label: "TYPE", value: "98%/99% MACHINE CLEAN & SORTEX" },
    { label: "SIZE", value: "MEDIUM & BOLD" },
    { label: "MOISTURE", value: "14% MAX" },
    { label: "PROCESSING & FORM", value: "DRIED & KERNEL" },
    { label: "DISCOLOR/DAMAGE", value: "0.5% MAX" },
    { label: "DAMAGED", value: "2% MAX" },
    { label: "AFLATOXIN", value: "10-20 PPB MAX" },
    { label: "INSECT DAMAGED", value: "2% MAX" },
    { label: "FOREIGN MATTERS", value: "2% MAX" },
    { label: "ORIGIN", value: "GUJARAT/RAJASTHAN/UTTARPRADESH" },
    { label: "PACKING", value: "5/10/25/50 KG NET PP. & BRAND PACKING" },
    { label: "QUALITY ASSURANCE", value: "GEO-CHEM" },
    { label: "LOADING CAPACITY", value: "24MT IN 20’FCL" },
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

const GreenMillet = () => {
  return (
    <Layout>
      <PageBanner title={"Green Millet Bajra"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/green_millet.jpg"
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
                            <a href="#">SKU: OPo1 Category: Other Products</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Green Millet Bajra</h3>
                    <p>
                      We are the exporter of supreme quality Green Millet Bajra.
                      The finest millet barja delivered are fresh, odorless and
                      suitable for use directly. Our hygienically packed Bajra
                      grains are free from dirt,stones & weevils. They are
                      cleaned and assorted well before packing. The botanical
                      name of Green Millet Bajra is Pennisetum glaucam and it
                      belongs to Poaceae Family. Its also called Pearl Millet
                      which is very popular for consumption in most of African
                      Countries. They are tiny, small and brownish green grains.
                      Since ancient times, green millet is a staple diet of
                      Indians. Green Millet is native to Rajasthan in India. Its
                      have distinctive taste and flavor which delivers best
                      nutrition.
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
export default GreenMillet;
