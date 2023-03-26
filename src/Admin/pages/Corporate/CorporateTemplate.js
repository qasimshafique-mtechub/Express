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
  ContactFlex,
  Contactlogo,
  CorporateProfile,
  GridContainer,
} from "../../../styles/Corporate.styled";

function CorporateTemplate() {
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
      {/* <ResumeContact style={{ background: color }}> */}
      <ResumeTitle></ResumeTitle>

      <div style={{ fontSize: "70px", marginLeft: "40px" }}>
        {firstname} {lastname}
      </div>
      {/* </ResumeContact> */}
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
          Contact Detail
            <CorporateProfile></CorporateProfile>

            <ContactFlex>
              {contact_number}
              <Contactlogo>
                <i
                  className="fa fa-volume-control-phone"
                  aria-hidden="true"
                  style={{ marginRight: "7px", padding: "5px" }}
                ></i>
              </Contactlogo>
            </ContactFlex>
            <hr />

            <ContactFlex>
              {email}
              <Contactlogo>
                <i
                  className="fa fa-envelope"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
              </Contactlogo>
            </ContactFlex>
            <hr />
            <ContactFlex>
              {address}
              <Contactlogo>
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ marginRight: "7px", padding: "5px" }}
                ></i>
              </Contactlogo>
            </ContactFlex>
            <hr style={{ height: "3px" }} />
            Education
            <CorporateProfile></CorporateProfile>
            <p>
              <b>{institute}</b>
            </p>
            <p>{degree}</p>
            <p>{graduation_year}</p>
            <p>{locations}</p>
            <hr />
            {educations?.map((item, index) => (
              <div id={index}>
                <p>
                  <b>{item.institute}</b>
                </p>
                <p>{item.degree}</p>
                <p>{item.graduation_year}</p>
                <p>{item.location}</p>
              </div>
            ))}
Skill
            <CorporateProfile></CorporateProfile>
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
            <hr style={{ height: "3px" }} />
          </div>
          <div className="col-sm-7" style={{ borderLeft: "1px solid black" }}>
          Objective
            <CorporateProfile></CorporateProfile>
            <p>{content.replace(/<\/?[^>]+(>|$)/g, "")}</p>

            <hr style={{ height: "3px" }} />
            Work Experience
            <CorporateProfile></CorporateProfile>
            <p>
              <b>{company}</b>
            </p>
            <p>
              {start_date} - {end_date}
            </p>
            <p>{location}</p>
            <p>{notes}</p>
            {experiences?.map((item, index) => (
              <div id={index}>
                <p>
                  <b>{item.company}</b>
                </p>
                <p>
                  {item.start_date} - {item.end_date}
                </p>
                <p>{item.location}</p>
                <p>{item.note}</p>
              </div>
            ))}

            <hr style={{ height: "3px" }} />
            Language
            <CorporateProfile></CorporateProfile>
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
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default CorporateTemplate;
