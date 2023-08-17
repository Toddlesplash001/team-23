import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "../MyContent/Academics.css";

export default function Clubs() {
  return (
    <MDBAccordion flush initialActive={1}>
      <MDBAccordionItem
        collapseId={1}
        headerTitle="How necessary are clubs and societies?"
      >
        Clubs and societies are the best way to socialise among others. After
        confining yourself in a room during JEE it's a good way to come out and
        interact with others.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={2}
        headerTitle="What are the clubs and societies in the college?"
      >
        To bring out the creative side of students and to give them rest from
        the hectic schedule, the college has various technical societies and
        cultural clubs. The cultural clubs include Art and Photography
        Club(APC), Music club, Dramatics club, Speakers Association and Study
        Circle(SAASC), Projection Design Club(PDC), Rotaract club,
        Communication,Information and Media Cell, English Editorial Board, Hindi
        Editorial Board, Punjabi Editorial Board, Student Counselling Cell,
        Women Empowerment Cell. The college has various technical societies that
        include American Society of Civil engineers(ASCE), Indian Institute of
        Metals(IIM), Society of Automotive Engineers(SAE), Computer Science
        Society(ACM), etc. The clubs and societies have been performed keeping
        in view the different interests of students.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={3}
        headerTitle="Is there any academic advantage of these clubs and societies?"
      >
        These clubs and societies may help one academically as they refresh the
        mind and allows one to get some time away from the schedule of the
        college which includes classes, labs, quizzes and loads of assignments.
        Along with this the college also has a 2-credit proficiency course in
        the 5th semester in which it is compulsory to contribute to at least one
        club or society, and the contribution made will be graded.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={4}
        headerTitle="Do the clubs organise competitions?"
      >
        Yes, all the clubs have their own events throughout the year, in which
        loads of competitions are organised which are open for all the students
        to participate in. Attractive awards and cash prizes are given to the
        winners of such competitions.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={5}
        headerTitle="Do these clubs have an influence outside the college?"
      >
        Yes, these clubs and societies have influence outside the college as
        well, as they send their teams to the other college events as well,
        which helps the student to get experience of such events and make new
        contacts, and it also gives them the chance to represent their college.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={6}
        headerTitle=" Can one join multiple clubs at the same time?"
      >
        Yes, one can join as many clubs as they want, but they have to set only
        one for proficiency and set their priorities.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={7}
        headerTitle=" How can I join the clubs I want to?"
      >
        All the clubs organise recruitment processes each year, and the
        interested students can apply for the club they want to go in. All the
        further details will be shared with them afterwards.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={8}
        headerTitle="What if I miss out on joining a club in my first year but I develop interest afterwards?"
      >
        You can give an interview for a society or a club in the second year as
        the interviews are open for the first year students as well as second
        year students.
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={9}
        headerTitle="If I am preparing for a competition and I go to participate in the competition, do I get attendance for it?"
      >
        Yes, you get attendance if you miss classes due to practice or
        participating in a competition.
      </MDBAccordionItem>
    </MDBAccordion>
  );
}
