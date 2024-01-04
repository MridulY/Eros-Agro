import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Image from 'next/image';

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import {
  ClientSliderOne,
  ListingSliderOne,
  PlaceSliderOne,
} from "../src/sliderProps";

const Index = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/* <!--====== Start Hero Section ======--> */}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay="30ms">
                    Welcome to Eros Agro!
                  </h1>
                  <h3 className="wow fadeInDown">
                    We are a leading spice export company dedicated to bringing
                    you the finest quality spices from around the world.
                  </h3>

                  <p className="tags">
                    <span>Popular Categories:</span>
                    <a href="#">Spices</a>,<a href="#">Herbs</a>,
                    <a href="#">SuperFoods</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Section ======--> */}
      {/* <!--====== Start Category Section ======--> */}
      <section className="category-area">
        <div className="container">
          <div className="category-wrapper-one wow fadeInDown">
            <div className="row no-gutters">
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <Image
                        src="/assets/images/logo/pepper.png"
                        alt="Listing Image"
                        width={800}
                        height={700}
                      />
                    </div>
                    <h6>Spices</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <h6>
                    Eros Agro is the exporter of superior quality of whole
                    spices.Eros Agro-Spices offers their products in both powder
                    and granule form
                  </h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <Image
                        src="/assets/images/logo/herb.png"
                        alt="Listing Image"
                        width={800}
                        height={700}
                      />
                    </div>
                    <h6>Herbs</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <h6>
                    Eros Agro is the exporter of superior quality of green
                    Herbs.They have been used in natural medicine for thousands
                    of years
                  </h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <Image
                        src="/assets/images/logo/food.png"
                        alt="Listing Image"
                        width={800}
                        height={700}
                      />
                    </div>
                    <h6>SuperFoods</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <h6>
                    Eros Agro is the exporter of superior quality of Super
                    Foods.These foods are often high in fiber, antioxidants,
                    vitamins, and minerals.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Category Section ======--> */}
      {/* <!--====== Start Listing Section ======--> */}
      <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Spices</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                data-wow-delay="10ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/whole_spices.png"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Whole Spices</a>
                    </Link>
                  </h3>

                  <span className="price">
                    Eros Agro is the exporter of superior quality of whole
                    spices. We always strive to keep the natural taste and
                    fragrance of product intact. Our whole spices packages are
                    of best quality so that it lets you feel its richness as you
                    open the pack.
                  </span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05"> +91 9914826464</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-user"></i>Eros_Spices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                data-wow-delay="20ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/oil_seeds.png"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Oil Seeds</a>
                    </Link>
                  </h3>

                  <span className="price">
                    Eros Agro is the exporter of premium quality, Sortex,
                    carefully macine cleaned natural sesame seeds. The packs of
                    natural sesame seeds ensure good health and purity with
                    itself. We have made to satiate the goodness of sesame seeds
                    at customer end.
                  </span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05"> +91 9914826464</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-user"></i>Eros_Spices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                data-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <Image
                    src="/assets/images/spices/blended_spices.png"
                    alt="Listing Image"
                    width={800}
                    height={700}
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center"></div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Blended Spices</a>
                    </Link>
                  </h3>

                  <span className="price">
                    Eros Agro is the exporter of fresh blended spices of best
                    quality. They are packed in tamper proof container so that
                    the freshness is totally sealed.A blend is a mixture of
                    different spices, herbs, and other flavorings.
                  </span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05"> +91 9914826464</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-user"></i>Eros_Spices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== End Features Section ======--> */}
      {/* <!--====== Start Place Section ======--> */}
      <section className="place-area pt-115 pb-110">
        <div className="container-fluid place-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <h2>New Products</h2>
              </div>
            </div>
          </div>
          <Slider
            {...PlaceSliderOne}
            className="place-slider-one wow fadeInDown"
          >
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <Image
                  src="/assets/images/spices/moringa.jpg"
                  alt="Place Image"
                  width={800}
                  height={700}
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <h3 className="title">Moringa Seeds/Leaf/Powder</h3>
                    <Link href="/listing-details-1">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <Image
                  src="/assets/images/spices/quonina.jpg"
                  alt="Place Image"
                  width={800}
                  height={700}
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <h3 className="title">Quinoa Seeds</h3>
                    <Link href="/listing-details-1">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <Image
                  src="/assets/images/spices/psyllum.jpg"
                  alt="Place Image"
                  width={800}
                  height={700}
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <h3 className="title">Psyllum Husk & Powder</h3>
                    <Link href="/listing-details-1">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <Image
                  src="/assets/images/spices/bay.jpg"
                  alt="Place Image"
                  width={800}
                  height={700}
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <h3 className="title">Bay Leaf</h3>
                    <Link href="/listing-details-1">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* <!--====== End Popular Listing Section ======--> */}
      {/* <!--====== Start Intro Video Section ======--> */}
      <section className="intro-video">
        <div
          className="intro-wrapper-one bg_cover pt-115"
          style={{ backgroundImage: `url(assets/images/spices/abc.jpg)` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="intro-content-box intro-content-box-one wow fadeInRight">
                  <div className="section-title section-title-left section-title-white mb-35">
                    <h2>
                      Over the years we have been winning hearts through our all
                      over world customer services
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Intro Video Section ======--> */}
      {/* <!--====== Start Newsletter Section ======--> */}
      <section className="newsletter-area">
        <div className="container">
          <div
            className="newsletter-wrapper newsletter-wrapper-one bg_cover"
            style={{
              backgroundImage: `url(assets/images/bg/newsletter-bg-1.jpg)`,
            }}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <div className="content">
                    <h2>Get Special Offers</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Enter Address"
                      name="email"
                      required
                    />
                    <i className="ti-location-pin"></i>
                    <Link href="https://mail.google.com/mail/u/0/">
                      <a className="main-btn icon-btn">Subscribe</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== End Client Section ======--> */}
      {/* <!--====== Start Blog Section ======--> */}
      <section className="blog-area pt-115 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <h2>BLOGS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay="10ms"
              >
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <a>
                      <Image
                        src="/assets/images/blog/top_12.jpg"
                        alt="Blog Image"
                        width={800}
                        height={700}
                      />
                    </a>
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      22 <span>Nov</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-user"></i>Eros_Spices
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Top 12 Coriander Seeds Benefits</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-agenda"></i>
                          <a href="#">
                            Top 12 Coriander Seeds Benefits A short presentation
                            …
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay="20ms"
              >
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <a>
                      <Image
                        src="/assets/images/blog/black_pepper.jpg"
                        alt="Blog Image"
                        width={800}
                        height={700}
                      />
                    </a>
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      22 <span>Nov</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-user"></i>Eros_Spices
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>The Black Pepper Benefits: A Healthier You!</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-agenda"></i>
                          <a href="#">
                            Dark pepper which is likewise viewed as the …
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button text-center mt-40">
                <Link href="/blog">
                  <a className="main-btn icon-btn">View Blog</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Blog Section ======--> */}
    </Layout>
  );
};
export default Index;
