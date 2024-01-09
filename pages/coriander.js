import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: 'HS CODE', value: '09092190' },
  { label: 'TYPE', value: 'MACHINE CLEANED & SORTEX CLEANED' },
  { label: 'VARIETY', value: 'EAGLE, SCOOTER, PARROT, SUPER XO & SPITS' },
  { label: 'FLAVOUR', value: 'Aromatic with a penetrating flavor' },
  { label: 'MOISTURE', value: '9% MAX' },
  { label: 'STYLE', value: 'DRIED' },
  { label: 'IMMATURED SEEDS', value: '1% MAX' },
  { label: 'TOTAL ASH', value: '9.5% MAX' },
  { label: 'ACID INSOLUBLE ASH', value: '1.75%' },
  { label: 'SALMONELLA', value: 'ABSENT/25GMS' },
  { label: 'ORIGIN', value: 'GUJARAT, RAJASTHAN, UTTARPRADESH' },
  { label: 'PACKING', value: '5/15/25/50 KG NET PP BAG/ JUTE BAG/ CARTOON' },
  { label: 'QUALITY ASSURANCE', value: 'SGS, GEO-CHEM, bureau veritas' },
  { label: 'LOADING CAPACITY', value: '10MT IN 20’FCL & 20MT IN 40’FCL' },
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

const Coriander = () => {
  return (
    <Layout>
      <PageBanner title={"Coriander Seeds"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/coriander.jpg"
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
                            <a href="#">SKU: WSo7 Category: Whole Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Coriander Seeds</h3>
                    <p>
                      We are one of the exporters of naturally selected and
                      assorted best quality coriander seeds. We thrive to keep
                      our standards high in terms of the product richness and
                      quality. We maintain its basic aroma and flavor till it
                      reaches you. The botanical name of coriander seeds is
                      Coriandrum sativum L. It belongs to family Apiaceae. The
                      plant has two types of seeds. One when dried is, used as
                      dry spice. The other when ripe is yellowish brown in color
                      and longitudinal shape. Coriander seeds are distinctly
                      aromatic and they are used as one of the common Indian
                      spices to enhance flavor to the dishes. Coriander seeds
                      are usually used in whole form if they are roasted to make
                      powder. They can be grounded to make powder than can be
                      used in making Indian curry masala. It can be added to
                      rice to enrich its fragrance. They can also be used to
                      make chutneys and gravies. Coriander seeds are known to
                      lower down diabetes. They are carminative. They are anti
                      inflammatory and thus are used as medicine in arthritis.
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
export default Coriander;
