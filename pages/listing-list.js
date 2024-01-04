import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
// import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import Image from 'next/image';

const RangeSlider = dynamic(() => import("../src/components/RangeSlider"), {
  ssr: false,
});

const ListingList = () => {
  return (
    <Layout>
      <PageBanner title={"Blended Spices"} />
      <section className="listing-list-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8">
              <div className="listing-search-filter mb-40">
                <div className="row">
                  <div className="col-md-8">
                    <div className="filter-left d-flex align-items-center"></div>
                  </div>
                  <div className="col-md-4">
                    <div className="filter-right">
                      <ul className="filter-nav">
                        <li>
                          <Link href="/listing-grid">
                            <a>
                              <i className="ti-view-grid" />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/listing-list">
                            <a className="active">
                              <i className="ti-view-list-alt" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-list-wrapper">
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <Image
                      src="/assets/images/spices/black_pepper_powder.jpg"
                      alt="listing Image"
                      width={800}
                      height={700}
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center"></div>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details-1">
                        <a>Black Pepper Powder</a>
                      </Link>
                    </h3>
                    <span>
                      We are the exporter of India’s own harvesting product- the
                      best quality of Black Pepper powder. Invite the wellness
                      pack. Black pepper powder is known widely today globally
                      for its pungency, distinct aroma and as a HEAT ingredient.
                      It’s a noble Indian spice with excellent taste, relishing
                      flavor, superb aroma and health benefits. Black pepper
                      powder is used in cooking and garnishing in cuisines
                      around the world.
                    </span>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <Image
                      src="/assets/images/spices/chilli_flakes.jpg"
                      alt="listing Image"
                      width={800}
                      height={700}
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details-1">
                        <a>Chilli Flakes</a>
                      </Link>
                    </h3>
                    <span>
                      We are the exporter of fresh Indian red chilli flakes of
                      best quality. They are packed in tamper proof container so
                      that the freshness is totally sealed. Its also known as
                      “PAPRIKA”, ITS prepared from mild red chili pepper, its
                      flavor ranges from Hot to Mild, Paprika is equally valued
                      for its taste and its bright red colour, derived from
                      capsanthin.
                    </span>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <Image
                      src="/assets/images/spices/cumin_powder.jpg"
                      alt="listing Image"
                      width={800}
                      height={700}
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details-1">
                        <a>Cumin Coriander Powder</a>
                      </Link>
                    </h3>
                    <span>
                      We are the exporter of Cumin-Coriander powder. It serves
                      one of the richly blended powders with freshness and
                      purity. Cumin-Coriander powder is yet another choice for
                      Indian cuisines. In fact it is mandatory Ingredient to
                      prepare flavorful and richly aromatic delicacies.
                    </span>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <Image
                      src="/assets/images/spices/curry_powder.jpg"
                      alt="listing Image"
                      width={800}
                      height={700}
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details-1">
                        <a>Curry Powder/Garam Masala</a>
                      </Link>
                    </h3>
                    <span>
                      Curry powder is a blend of ground spices used to flavor
                      curry dishes. It typically includes a mix of Indian and
                      Southeast Asian spices such as turmeric, cumin, coriander,
                      and cardamom, but can vary depending on the specific
                      recipe or brand.
                    </span>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <Image
                      src="/assets/images/spices/red_chilli.jpg"
                      alt="listing Image"
                      width={800}
                      height={700}
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details-1">
                        <a>Red Chilli Powder</a>
                      </Link>
                    </h3>
                    <span>
                      Red Chilli powder is commonly known as “lal mirch powder”
                      and it is one of the key ingredients in the preparation of
                      Indian cuisines. It is one of the main members of spice
                      catalogue because Indians dishes are said to be incomplete
                      without the flavor of Red chilli powder.
                    </span>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <Image
                      src="/assets/images/spices/turmeric.jpg"
                      alt="listing Image"
                      width={800}
                      height={700}
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details-1">
                        <a>Turmeric Powder</a>
                      </Link>
                    </h3>
                    <span>
                      We are the exporter of selectively chosen turmeric root
                      Fingers that can be blended with technology and
                      machineries to make finest turmeric powder. We strive to
                      keep the natural aroma and purity as it is when doing the
                      process. It is packed carefully to maintain its rich
                      properties.
                    </span>
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
export default ListingList;
