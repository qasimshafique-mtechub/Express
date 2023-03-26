import { Paper, Typography } from "@mui/material";
import React from "react";
import {
  ResumeImage,
  ResumeTitle,
  VerticalLineSkill,
} from "../../../styles/Resume.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  ResumeContact,
  ResumeEducation,
  ResumeExperience,
  ResumeNumber,
  ResumeProfile,
  ResumeSkill,
  VerticalLine,
} from "../../../styles/Resume1.styled";
import {
  PersuasiveCareer,
  PersuasiveChildData,
  PersuasiveHeader,
  PersuasiveTitle,
  PersuasiveUlTag,
} from "../../../styles/Persuasive.styled";

function PersuasiveTemplate() {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.resumecontact.firstname);
  const lastname = useSelector((state) => state.resumecontact.lastname);
  const email = useSelector((state) => state.resumecontact.email);
  const address = useSelector((state) => state.resumecontact.address);
  const image = useSelector((state) => state.resumecontact.image);

  const contact_number = useSelector(
    (state) => state.resumecontact.contact_number
  );
  const content = useSelector((state) => state.resumeobjective.content);
  const company = useSelector((state) => state.resumeexperience.company);
  const position = useSelector((state) => state.resumeexperience.position);
  const start_date = useSelector((state) => state.resumeexperience.start_date);
  const end_date = useSelector((state) => state.resumeexperience.end_date);
  const location = useSelector((state) => state.resumeexperience.locations);
  const experiences = useSelector(
    (state) => state.resumeexperience.experiences
  );
  const notes = useSelector((state) => state.resumeexperience.notes);
  const skill = useSelector((state) => state.resumeskill.skill);
  const level = useSelector((state) => state.resumeskill.level);
  const skills = useSelector((state) => state.resumeskill.skills);
  const institute = useSelector((state) => state.resumeeducation.institute);
  const degree = useSelector((state) => state.resumeeducation.degree);
  const locations = useSelector((state) => state.resumeeducation.location);
  const educations = useSelector((state) => state.resumeeducation.experiences);
  const description = useSelector((state) => state.resumeeducation.description);
  console.log(description, "description");
  const graduation_year = useSelector(
    (state) => state.resumeeducation.graduation_year
  );
  const language = useSelector((state) => state.resumelanguage.language);
  const languages = useSelector((state) => state.resumelanguage.languages);

  const font = useSelector((state) => state.font.font);
  const color = useSelector((state) => state.font.color);

  const redux = useSelector((state) => state);
  console.log(redux, "redux");
  return (
    <Paper style={{ fontFamily: font }}>
      <PersuasiveHeader style={{ background: color }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <PersuasiveTitle>
                {firstname} {lastname}
              </PersuasiveTitle>
              <br />
              <p style={{ color: "white" }}>
                {content.replace(/<\/?[^>]+(>|$)/g, "")}
              </p>
            </div>
            <div
              class="col-lg-6"
              style={{ marginLeft: "2px solid white", marginTop: "50px" }}
            >
              <ResumeNumber style={{ color: "white" }}>
                Contact Number: {contact_number}
                <br />
              </ResumeNumber>
              <ResumeNumber style={{ color: "white" }}>
                Email:
                {email}
              </ResumeNumber>
              <ResumeNumber style={{ color: "white" }}>
                Address:
                {address}
              </ResumeNumber>
            </div>
          </div>
        </div>
      </PersuasiveHeader>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            Career Path
            <br />
            <div style={{ marginLeft: "50px" }}>
              <Typography variant="body">
                <span style={{ color: "brown" }}>{company}</span>
              </Typography>

              <br />
              <Typography variant="body">{location}</Typography>
              <br />
              <Typography variant="body">{position}</Typography>
              <br />
              <Typography variant="body">
                {start_date} - {end_date}
              </Typography>
            </div>
            {experiences?.map((item, index) => (
              <PersuasiveChildData id={index}>
                <Typography variant="body">
                  <span style={{ color: "brown" }}>{item.company}</span>
                </Typography>
                <br />
                <Typography variant="body">{item.location}</Typography>
                <br />
                <Typography variant="body">{item.position}</Typography>
                <br />
                <Typography variant="body">
                  {item.start_date} - {item.end_date}
                </Typography>{" "}
              </PersuasiveChildData>
            ))}
            <br />
            <br />
            Education
            <br />
            <div style={{ marginLeft: "50px" }}>
              <Typography variant="body">
                <span style={{ color: "brown" }}>{institute}</span>
              </Typography>
              <br />
              <Typography variant="body">{degree}</Typography>
              <br />
              <Typography variant="body">{graduation_year}</Typography>
              <br />
              <Typography variant="body">{locations}</Typography>
              <hr />
              <br />
              {educations?.map((item, index) => (
                <div id={index}>
                  <Typography variant="body">
                    <span style={{ color: "brown" }}>{item.institute}</span>
                  </Typography>
                  <br />
                  <Typography variant="body">{item.degree}</Typography>
                  <br />
                  <Typography variant="body">{item.graduation_year}</Typography>
                  <br />
                  <Typography variant="body">{item.location}</Typography>
                </div>
              ))}
            </div>
            <br />
            <br />
            Skill
            <br />
            <div style={{ marginLeft: "20px" }}>
              <ul>
                <li>
                  {skill} - {level}
                </li>
                {skills.map((item, index) => (
                  <li index>
                    {item.skill} -{item.level}
                  </li>

                  // <Grid item xs={4} key={index}>

                  // </Grid>
                ))}
                {/* {skills.map((item, index) => (
                <li index>
                  {item.skill} -{item.level}
                </li>

                // <Grid item xs={4} key={index}>

                // </Grid>
              ))} */}
              </ul>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="col-lg-12 col-12">
              <div className="col-12">
                <PersuasiveUlTag>
                  <PersuasiveCareer>{notes}</PersuasiveCareer>
                  {experiences?.map((item, index) => (
                    <div id={index}>
                      <PersuasiveCareer>{item.note}</PersuasiveCareer>
                    </div>
                  ))}

                  <PersuasiveCareer>{description}</PersuasiveCareer>

                  {educations?.map((item, index) => (
                    <div id={index}>
                      <PersuasiveCareer>{item.description}</PersuasiveCareer>
                    </div>
                  ))}
                </PersuasiveUlTag>
                <br />
                <br />
                <div style={{ marginLeft: "20px", marginTop: "60px" }}>
                  Language
                </div>
                <ul>
                  <li style={{ marginLeft: "50px" }}>{language}</li>
                </ul>
                <ul>
                  {languages?.map((item, index) => (
                    <li index style={{ marginLeft: "50px" }}>
                      {item.language}
                    </li>

                    // <Grid item xs={4} key={index}>

                    // </Grid>
                  ))}
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default PersuasiveTemplate;
