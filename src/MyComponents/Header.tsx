import { useState } from "react";
import Home from "../MyContent/Home";
import Club from "../MyContent/clubs";
import Sports from "../MyContent/sports";
import Hostel from "../MyContent/hostels";
import Internships from "../MyContent/internships";
import Academics from "../MyContent/Academics";
import "./Header.css";
export default function Header() {
  return (
    <>
      <ul className="nav nav-tabs nav-fill" id="myTab " role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            HOME
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            ACADEMICS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            CLUBS AND SOCIETIES
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="sports-tab"
            data-bs-toggle="tab"
            data-bs-target="#sports-tab-pane"
            type="button"
            role="tab"
            aria-controls="sports-tab-pane"
            aria-selected="false"
          >
            SPORTS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="hostels-tab"
            data-bs-toggle="tab"
            data-bs-target="#hostels-tab-pane"
            type="button"
            role="tab"
            aria-controls="hostels-tab-pane"
            aria-selected="false"
          >
            HOSTELS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="internships-tab"
            data-bs-toggle="tab"
            data-bs-target="#internships-tab-pane"
            type="button"
            role="tab"
            aria-controls="internships-tab-pane"
            aria-selected="false"
          >
            PLACEMENTS
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <Home />
        </div>

        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <Academics />
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <Club />
        </div>

        <div
          className="tab-pane fade"
          id="sports-tab-pane"
          role="tabpanel"
          aria-labelledby="Sports-tab"
          tabindex="0"
        >
          <Sports/>
        </div>
        <div
          className="tab-pane fade"
          id="hostels-tab-pane"
          role="tabpanel"
          aria-labelledby="Hostels-tab"
          tabindex="0"
        >
          <Hostel />
        </div>
        <div
          className="tab-pane fade"
          id="internships-tab-pane"
          role="tabpanel"
          aria-labelledby="internships-tab"
          tabindex="0"
        >
          <Internships />
        </div>
      </div>
    </>
  );
}
