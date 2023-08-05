import { useState } from "react";
import homecontent from "../MyContent/Home";
import academiccontent from "../MyContent/Academics";
import clubcontent from "../MyContent/clubs";
import sportscontent from "../MyContent/sports";
import hostelcontent from "../MyContent/hostels";
import internshipcontent from "../MyContent/internships";
export default function Header() {
  return (
    <>
      <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
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
            Home
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
            Academics
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
            Clubs and Societies
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
            Sports
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
            Hostels
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
            Internships and Packages
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
          {homecontent}
        </div>

        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          {academiccontent}
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          {clubcontent}
        </div>
        <div
          className="tab-pane fade"
          id="sports-tab-pane"
          role="tabpanel"
          aria-labelledby="Sports-tab"
          tabindex="0"
        >
          {sportscontent}
        </div>
        <div
          className="tab-pane fade"
          id="hostels-tab-pane"
          role="tabpanel"
          aria-labelledby="Hostels-tab"
          tabindex="0"
        >
          {hostelcontent}
        </div>
        <div
          className="tab-pane fade"
          id="internships-tab-pane"
          role="tabpanel"
          aria-labelledby="internships-tab"
          tabindex="0"
        >
          {internshipcontent}
        </div>
      </div>
    </>
  );
}
