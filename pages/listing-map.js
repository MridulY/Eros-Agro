import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Image from 'next/image';

const ListingMap = () => {
  return (
    <Layout>
      <PageBanner title={"Whole Spices"} pageName={"Products"} />
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-listing-widget mb-30 wow fadeInUp"></div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="listing-search-filter mb-40">
                <div className="row">
                  <div className="col-md-8">
                    <div className="filter-left d-flex align-items-center">
                      <div className="show-text">
                        <span>Showing Result 1-05</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-wrapper">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <Image
                          src="/assets/images/spices/ajwain.jpg"
                          alt="Listing Image"
                          width={800}
                          height={700}
                        />
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/ajwain">
                            <a>Ajwain Seeds</a>
                          </Link>
                        </h3>
                        <p>
                          We are the exporter of ajwain seeds. It is a spice hub
                          and has attained global fame for the same. We are a
                          sustained provider of Indian spices packed with
                          quality and goodness. Ajwain seeds have a place of
                          utmost importance in spice culture since ages. They
                          are botanically known as Trachyspermum ammi and belong
                          to Apieaceae.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <Image
                          src="/assets/images/spices/black_pepper.jpg"
                          alt="Listing Image"
                          width={800}
                          height={700}
                        />
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/blackPepper">
                            <a>Black Pepper</a>
                          </Link>
                        </h3>
                        <p>
                          We are the exports premium quality of black pepper in
                          India and across the world. One of the most tangling
                          peppery Indian spices is Black Pepper. The botanical
                          name of Black Pepper is Piper nigrum L. It belongs to
                          Piperacea family. Black peppers are sun dried berries
                          of pepper plant.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <Image
                          src="/assets/images/spices/cloves.jpg"
                          alt="Listing Image"
                          width={800}
                          height={700}
                        />
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Cloves</a>
                          </Link>
                        </h3>
                        <p>
                          We are the exporter of best quality handpicked cloves.
                          The premium packing assures that is aroma and flavor
                          remains intact. Our superb quality cloves are selected
                          and handpicked for sustaining its purity. The
                          botanical name of Clove is Syzygium aromaticum and it
                          belongs to Myrtaceae family. Cloves are unopened
                          flower bud of a tropical tree.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <Image
                          src="/assets/images/spices/coriander.jpg"
                          alt="Listing Image"
                          width={800}
                          height={700}
                        />
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Coriander Seeds</a>
                          </Link>
                        </h3>
                        <p>
                          We are one of the exporters of naturally selected and
                          assorted best quality coriander seeds. We thrive to
                          keep our standards high in terms of the product
                          richness and quality. We maintain its basic aroma and
                          flavor till it reaches you. The botanical name of
                          coriander seeds is Coriandrum sativum L. It belongs to
                          family Apiaceae. The plant has two types of seeds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <Image
                          src="/assets/images/spices/Cumin.jpg"
                          alt="Listing Image"
                          width={800}
                          height={700}
                        />
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Cumin Seeds</a>
                          </Link>
                        </h3>
                        <p>
                          We are the exporter of premium quality of cumin seeds
                          to India and across the world. We deliver high quality
                          cumin seeds to our customers and we never compromise
                          for the same. We are the pioneer exporter of cumin
                          seeds globally and we believe in achieving customer
                          satisfaction through our constant efforts to keep up
                          the quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingMap;
