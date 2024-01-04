import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: "HS CODE", value: "09109990" },
    { label: "COLOR", value: "GREENISH, GREENISH YELLOW" },
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

const BayLeaf = () => {
  return (
    <Layout>
      <PageBanner title={"Bay Leaf"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/bay.jpg"
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
                            <a href="#">SKU: OPo3 Category: Other Products</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Bay Leaf</h3>
                    <p>
                      We are the exporter of top grade Bay Leaves. They are sold
                      as dried whole leaf. We have a selection of quality Bay
                      leaves packed under hygienic condition. The aroma of Bay
                      leaves spread upon opening the pack and satiates the end
                      user. The botanical name of Bay leaf is Laurus nobilis and
                      it belongs to Lauraceae Family. They are elliptical in
                      shape with one end pointed. The upper surface is olive
                      green in color and has a shine. The lower surface is dull
                      olive to brown in color. It has soft aroma and they are
                      bitter in taste. Bay leaves are native to Mediterranean
                      region and grow in Europe and California. Bay leaves are
                      commonly known as Tej Patta in India. Bay leaves in Indian
                      cuisines are mostly used in tempering. They are mainly
                      used for adding flavor and aroma to pulao or curry.
                      Crushed Bay leaves are used in making Biryani Masala. They
                      impart even more delicate aroma to delicacies. Bay leaves
                      are often used in flavoring soups and stews in
                      Mediterranean cuisines. Bay leaves have some medical
                      properties. They are useful in treating high blood sugar,
                      migraine and headache, bacterial and fungal infection.
                      They have anti inflammatory and anti oxidant properties.
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
export default BayLeaf;
