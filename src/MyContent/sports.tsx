import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "../MyContent/Academics.css";

export default function Sports() {
  return (
    <MDBAccordion flush initialActive={1}>
      <MDBAccordionItem
        collapseId={1}
        headerTitle="What all sports facilities does the college have?"
      >
        The Institute has several playgrounds and well-maintained athletic track
        to encourage the students to take part in different games such as
        Cricket, Hockey, Football, Basketball, Volleyball, Lawn Tennis and
        Badminton.The Institute has also a Gymnasium-cum-Badminton Hall and a
        Swimming Pool Complex equipped with all modern facilities.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={2}
        headerTitle="What are the timings of different sports and gym?"
      >
        The timings to play the different sports and use the gym are 5-8 in the
        morning and 5-8 in the evening.
      </MDBAccordionItem>

      <MDBAccordionItem
        collapseId={3}
        headerTitle="Does the college have coaches for the respective sports?"
      >
        The college does have coaches for different sports, but the coaching
        facility is not available for all the sports.
      </MDBAccordionItem>

      <MDBAccordionItem
        collapseId={4}
        headerTitle="Does the college conduct any events related to the sports?"
      >
        The college does conduct an athletic meet every year, to promote the
        importance of physical fitness in student’s lives. In addition to this,
        the college also conducts inter branch matches of the different sports
        such as basketball, volleyball ,cricket etc. with the help of sports
        heads of the respective sports.
      </MDBAccordionItem>

      <MDBAccordionItem
        collapseId={5}
        headerTitle="Does the college send teams to different tournaments outside the college?"
      >
        Yes, the college sends teams to all the major tournaments that take
        place around the country.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={6}
        headerTitle="Does the usage of sports facilities require any fees to be paid?"
      >
        Almost all of the sports are free to play and no fees are required. But,
        using some facilities like swimming pool and gym require a nominal fee
        to be paid by the students.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={7}
        headerTitle="Can the stadiums of different events be used for some other purpose?"
      >
        The stadiums can be used for other purposes, but the students need to
        give a proper letter to the DSA for the same.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={8}
        headerTitle="Are the sports facilities open every day and during the holidays too?"
      >
        The sports facilities are open only on weekdays and saturday, however
        they are closed on Sunday, and the same is followed during the holidays
        too.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={9}
        headerTitle="Are there specific rules and guidelines to be followed while using the facilities?"
      >
        The students who want to use the sports facilities should dress up in
        proper sports kit and should have all the necessary sports equipment for
        protection.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={10}
        headerTitle=" How well are the sports facilities available at the college maintained?"
      >
        The sports facilities at the college are well maintained, and the
        presence of coaches makes it a wonderful experience of playing for the
        college.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={11}
        headerTitle="Does the college have all the necessary equipment for all the sports?"
      >
        Yes, the college has all the necessary sports equipment necessary to
        play that particular sport.
      </MDBAccordionItem>
    </MDBAccordion>
  );
}
