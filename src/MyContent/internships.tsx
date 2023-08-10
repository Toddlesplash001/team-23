import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "../MyContent/Academics.css";

export default function Internships() {
  return (
    <MDBAccordion flush initialActive={1}>
      <MDBAccordionItem
        collapseId={1}
        headerTitle="What is the placement percentage of the college?"
      >
        The placement percentage of the college is 85%.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={2}
        headerTitle="What companies have visited the college in the past few years?
"
      >
        In the past few years, many major companies have visited the college,
        including Apple, Microsoft, Goldman Sachs, JP Morgan, Maruti Suzuki,
        Google, Amazon etc.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={3}
        headerTitle=" What is the average package at PEC?
"
      >
        The average package at PEC is 11.00 lacs per annum.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={4}
        headerTitle="Is there a dedicated career counselling or placement cell at PEC?"
      >
        Yes, there is a dedicated body at PEC, the CDGC(Career Development and
        Guidance Centre) which offers an all-round career solution to the
        students. The centre guides the students to decide and pursue their
        dream careers in different sectors be it engineering, IT, Analytics,
        Consulting , research and development, Operations etc . The whole
        placement process is organised and executed by this centre
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={5}
        headerTitle=" Do the students get an opportunity to get some internship and practical work experience during their degree?
"
      >
        Yes, the students get the opportunity to have practical work experience
        in the form of an internship. They perform this internship during their
        sixth semester of college.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={6}
        headerTitle="Does the college have strong connections with industry professionals and companies that often hire graduates?
"
      >
        Yes, the college has a strong alumni network and it does have
        connections with industry professionals which helps the students to get
        more offers as more companies visit the college.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={7}
        headerTitle="Does the college organise seminars or workshops by the industry experts for the students to help them in their placement training?
"
      >
        The college organises seminars on a regular basis, with the help of the
        CDGC, to help the students in their career training and skill
        improving.The centre also arranges career talks for dissemination of
        knowledge regarding the employment opportunities in the industry related
        to the relevant fields and interest of the students . Centre keeps
        record of the students who undergo internships and the companies which
        come for recruitment. In addition, Finishing School / Soft Skills
        Development Workshops are also organised to improve the communication
        skills of students.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={8}
        headerTitle="Does the college also have companies that give international offers?
"
      >
        The college does call companies that give domestic as well as
        international offers, but these international companies give offers to a
        small number of students.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={9}
        headerTitle="Are there any specialised resources or support for students interested in entrepreneurship or starting their own ventures?"
      >
        To promote entrepreneurship amongst the students, the college has a
        dedicated Entrepreneurship and Incubation Cell, that promotes and
        appreciates the innovation and ideas of students, who want to start
        their own ventures or start ups.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={10}
        headerTitle="What strategies does the college employ to keep its curriculum aligned with industry trends and demands?
"
      >
        The college keeps updating its curriculum after some time, so that they
        cater to the needs of what the industry requires, so that the students
        get knowledge about these skills and demands of the companies, and they
        turn out to be an asset to the companies.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={11}
        headerTitle="How does the college assist students in building a strong professional online presence, such as through LinkedIn or personal websites?
"
      >
        The college helps the students to build a strong professional presence,
        as the ACM society of the college organises various workshops, in which
        they teach the students to use all the basic social media sites that
        serve the purpose of building a strong professional presence, as well as
        the sites that help them to run their programs and website.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={12}
        headerTitle="Can the non circuital branches also sit for placement in coding based companies?"
      >
        Yes, some of the companies allow all the branches to sit for placements
        and there is no barrier.
      </MDBAccordionItem>
    </MDBAccordion>
  );
}
