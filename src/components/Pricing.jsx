import "../App.css"; // Import CSS file for styling
import React from "react";

export const Pricing = () => {
    return (
        <section className="pricing-section">
        <div className="container">
            <h2>Pricing Plans</h2>
            <p>Choose the plan that fits your needs</p>
            <div className="pricing-cards">
            {/* Example pricing cards */}
            <div className="pricing-card">
                <h3>Basic Plan</h3>
                <p>$10/month</p>
                <button className="primary-btn">Select</button>
            </div>
            <div className="pricing-card">
                <h3>Pro Plan</h3>
                <p>$20/month</p>
                <button className="primary-btn">Select</button>
            </div>
            <div className="pricing-card">
                <h3>Enterprise Plan</h3>
                <p>$50/month</p>
                <button className="primary-btn">Select</button>
            </div>
            </div>
        </div>
        </section>
    );
    }