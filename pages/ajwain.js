import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from "next/image";

const ProductDetails = () => {
  const productDetails = [
    { label: 'HS CODE', value: '09109914' },
  { label: 'TYPE', value: 'SINGAPORE STANDARD & EUROPE STANDARD' },
  { label: 'QUALITY', value: '97%/98%/99%/99.5% & SORTEX CLEAN' },
  { label: 'COLOR', value: 'PURE NATURAL GREEN, LIGHT GREEN' },
  { label: 'MOISTURE', value: '10% MAX' },
  { label: 'ADMIXTURE', value: '1-2%, MAX' },
  { label: 'FLAVOR', value: 'SWEET AROMA WITH A WARM LIQUORICE LIKE AROMATIC FLAVOUR' },
  { label: 'TOTAL ASH', value: '9.5% MAX' },
  { label: 'ACID INSOLUBLE ASH', value: '1.75% MAX' },
  { label: 'SALMONELLA', value: 'ABSENT/25GMS' },
  { label: 'ORIGIN', value: 'GUJARAT, RAJASTHAN, ANDHRAPRADESH' },
  { label: 'PACKING', value: '5/15/25/50 KG NET PP BAG/ JUTE BAG/ CARTON' },
  { label: 'QUALITY ASSURANCE', value: 'SGS, GEO-CHEM, bureau veritas' },
  { label: 'LOADING CAPACITY', value: '13MT IN 20’FCL & 26MT IN 40’FCL' },
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

const Ajwain = () => {
  return (
    <Layout>
      <PageBanner title={"Ajwain"} />
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <Image
                      src="/assets/images/spices/ajwain.jpg"
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
                            <a href="#">SKU: WSo5 Category: Whole Spices</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">Ajwain Seeds</h3>
                    <p>
                      We are the exporter of ajwain seeds. It is a spice hub and
                      has attained global fame for the same. We are a sustained
                      provider of Indian spices packed with quality and
                      goodness. Ajwain seeds have a place of utmost importance
                      in spice culture since ages. They are botanically known as
                      Trachyspermum ammi and belong to Apieaceae. They are tiny
                      seeds having a brownish color. They have very strong
                      flavor and sharp aromatic essence. Ajwain seeds are used
                      in small proportion due to its strong flavor. It is used
                      in tempering certain dishes. It can be added to bhajiya
                      batter to avoid indigestion. It is also used as
                      preservative in pickles. It is added to buttermilk to ease
                      digestion. Ajwain seeds are good for health too.
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
export default Ajwain;
