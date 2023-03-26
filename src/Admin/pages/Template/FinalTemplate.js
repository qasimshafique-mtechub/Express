import { Paper, Typography } from "@mui/material";
import React from "react";
import {
  ResumeImage,
  ResumeTitle,
  VerticalLineSkill,
} from "../../../styles/Resume.styled";
import { useDispatch, useSelector } from "react-redux";
import {
    FinalImage,
    FinalTitle,
  ResumeContact,
  ResumeEducation,
  ResumeExperience,
  ResumeNumber,
  ResumeProfile,
  ResumeSkill,
  VerticalLine,
} from "../../../styles/Resume1.styled";

function FinalTemplate() {
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
      <ResumeContact style={{ background: color }}>
        <FinalTitle>
          {firstname} {lastname}
        </FinalTitle>
        <div>
          <FinalImage src={image} alt="profile" />
        </div>
      </ResumeContact>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <VerticalLine>
              <ResumeNumber>
                <i
                  className="fa fa-volume-control-phone"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
                {contact_number}
                <br />
              </ResumeNumber>
              <ResumeNumber>
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
                {email}
              </ResumeNumber>
              <ResumeNumber>
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
                {address}
              </ResumeNumber>
            </VerticalLine>
            <hr />
            <VerticalLineSkill>
              <ResumeEducation>Education</ResumeEducation>
              <Typography variant="body">
                <b>{institute}</b>
              </Typography>
              <br />
              <Typography variant="body">{degree}</Typography>
              <br />
              <Typography variant="body">{graduation_year}</Typography>
              <br />
              <Typography variant="body">{location}</Typography>
              <br />
              <br />
              <hr />
              {educations?.map((item, index) => (
                <>
                  <div index>
                    <VerticalLineSkill>
                      <Typography variant="body">
                        <b>{item.institute}</b>
                      </Typography>
                      <br />
                      <Typography variant="body">{item.degree}</Typography>
                      <br />
                      <Typography variant="body">
                        {item.graduation_year}
                      </Typography>
                      <br />
                      <Typography variant="body">{item.location}</Typography>
                    </VerticalLineSkill>
                  </div>
                </>

                // <Grid item xs={4} key={index}>

                // </Grid>
              ))}
            </VerticalLineSkill>
            <br />
            <br />
            <br />

            <VerticalLineSkill>
              <ResumeSkill>Skill</ResumeSkill>
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
            </VerticalLineSkill>
            <hr />
          </div>

          <div className="col-lg-7">
            <div className="col-lg-12 col-12">
              <div className="col-12">
                <ResumeProfile>Profile</ResumeProfile>
                <p>{content.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                <br />
                <hr />
                <ResumeExperience>Experience</ResumeExperience>
                <Typography variant="body">
                  <b>{company}</b>
                </Typography>
                <br />
                <Typography variant="body">{location}</Typography>
                <br />
                <Typography variant="body">{position}</Typography>
                <br />
                <Typography variant="body">
                  {start_date} - {end_date}
                </Typography>
                <br />
                <p>{notes}</p>
                <hr />
                {experiences?.map((item, index) => (
                  <li index>
                    <Typography variant="body">
                      <b>{item.company}</b>
                    </Typography>
                    <br />
                    <Typography variant="body">{item.location}</Typography>
                    <br />
                    <Typography variant="body">{item.position}</Typography>
                    <br />
                    <Typography variant="body">
                      {item.start_date} - {item.end_date}
                    </Typography>
                    <br />
                    <p>{item.note}</p>{" "}
                  </li>

                  // <Grid item xs={4} key={index}>

                  // </Grid>
                ))}
                <ResumeSkill>Language</ResumeSkill>
                <ul>
                  <li>{language}</li>
                </ul>
                <ul>
                  {languages?.map((item, index) => (
                    <li index>{item.language}</li>

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

export default FinalTemplate;
