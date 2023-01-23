import { Accordion } from "@chakra-ui/react";
import "./css/about.css";
import AutoCarousal from "./auto-carousal";
import Question from "./question";

const About = () => {
  return (
    <div className="about_body">
      <br />
      <div className="about_main">
        <h1 className="about_heading0_suy">
          About&ensp;<span className="c2">Horizon</span>
        </h1>
        <p className="h_text">
          sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
          ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit
          scelerisque mauris pellentesque
          <br /> pulvinar pellentesque. vehicula ipsum a arcu cursus vitae
          congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque
          pulvinar pellentesque. sollicitudin nibh sit amet commodo nulla
          facilisi nullam vehicula
          <br /> ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque vehicula ipsum a
          arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
          mauris pellentesque pulvinar pellentesque.
        </p>
        <h1 className="about_heading1_suy">
          <span className="c2">Directors's</span>&ensp;Word
        </h1>
        <p className="h_text">
          sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
          ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque sollicitudin
          nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus vitae congue mauris rhoncus aenean vel elit
          <br /> scelerisque mauris pellentesque pulvinar pellentesque vehicula
          ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque.
        </p>
        <h1 className="about_heading2_suy">
          Our&ensp;<span className="c2">Sponsors</span>
        </h1>
        <AutoCarousal />
        <h1 className="about_heading3_suy">Frequently Asked Questions</h1>
        <h1 className="about_heading4_suy">FAQ's</h1>
        <div>
          <Accordion allowToggle className="lol">
            <Question ques="How are You?" ans="Fine" />
            <Question
              ques="Which is the Best Club of IIITV-ICD?"
              ans="Undoubtedly, the Gaming Club Argo is the best Club of IIITV-ICD. No other Club is close enough to give competition to them. Note that it is the only club who has conducted 0 events."
            />
            <Question
              ques="Kya IIITV_ICD mai gaming hogi"
              ans="Lol wifi toh kaam karta nahi"
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
