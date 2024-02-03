import React, { useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const AddListing = () => {
  // const handleSubmit = () => {
  //   // Trigger Google Form submission
  //   document.getElementById("googleForm").submit();
  // };

  
  return (
    <Layout>
      <PageBanner title={"Request Product"} pageName={"Listing"} />
      <section className="fioxen-add-listing pt-120 pb-120">
        <div className="container">
          <form id="googleForm">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="add-listing-form general-listing-form mb-60 wow fadeInUp">
                  <h4 className="title">Request Product</h4>
                  <div className="row">
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default AddListing;
