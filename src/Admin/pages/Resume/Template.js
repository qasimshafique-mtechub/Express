import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import {
  ResumeName,
  ResumeContact,
  Contact,
  CareerPath,
} from "../../../styles/Resume2.styled";
import { useDispatch, useSelector } from "react-redux";

function Template() {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.resumecontact.firstname);
  const lastname = useSelector((state) => state.resumecontact.lastname);
  const email = useSelector((state) => state.resumecontact.email);
  const address = useSelector((state) => state.resumecontact.address);
  const contact_number = useSelector(
    (state) => state.resumecontact.contact_number
  );
  const content = useSelector((state) => state.resumeobjective.content);
  const company = useSelector((state) => state.resumeexperience.company);
  const position = useSelector((state) => state.resumeexperience.position);
  const start_date = useSelector((state) => state.resumeexperience.start_date);
  const end_date = useSelector((state) => state.resumeexperience.end_date);
  const location = useSelector((state) => state.resumeexperience.locations);
  const notes = useSelector((state) => state.resumeexperience.notes);
  const exp = useSelector((state) => state.resumeexperience.experiences);

  const skill = useSelector((state) => state.resumeskill.skill);
  const level = useSelector((state) => state.resumeskill.level);
  const skills = useSelector((state) => state.resumeskill.skills);
  const institute = useSelector((state) => state.resumeeducation.institute);
  // const educations = useSelector((state) => state.resumeeducation.educations);

  const degree = useSelector((state) => state.resumeeducation.degree);
  const locations = useSelector((state) => state.resumeeducation.location);
  const graduation_year = useSelector(
    (state) => state.resumeeducation.graduation_year
  );
  const educations = useSelector((state) => state.resumeeducation.educations);

  const language = useSelector((state) => state.resumelanguage.language);
  const lan = useSelector((state) => state.resumelanguage.languages);

  const redux = useSelector((state) => state);
  console.log(redux, "redux");
  return (
    <div style={{ color: "black" }}>
      {/* <Paper> */}
      <ResumeContact>
        <ResumeName>
          {firstname} {lastname}
        </ResumeName>
        <Contact>
          email : {email}
          <br />
          Number : {contact_number}
          <br />
          Address : {address}
        </Contact>
      </ResumeContact>
      <hr />
      <div>
        <Typography variant="h6">Objective</Typography>
        <p>{content.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      </div>
      <div>
        <Typography variant="h6">Career Path</Typography>
        <CareerPath>
          <div>
            <p style={{ marginRight: "300px" }}>{company}</p>
            <p>{position}</p>
            <p>
              {start_date} - {end_date}
            </p>
            <p>{location}</p>
          </div>
          <div>
            <p>{notes}.</p>
          </div>
        </CareerPath>
        <hr />
      </div>
      <div>
        {exp?.map((item, index) => (
          <div index>
            <CareerPath>
              <div>
                <p style={{ marginRight: "300px" }}>{item.company}</p>
                <p>{item.position}</p>
                <p>
                  {item.start_date} - {item.end_date}
                </p>
                <p>{item.location}</p>
              </div>
              <div>
                <p>{item.note}.</p>
              </div>
            </CareerPath>
            <hr />
          </div>

          // <Grid item xs={4} key={index}>

          // </Grid>
        ))}
        <Typography variant="h6">Education and Traning</Typography>
        <CareerPath>
          <div>
            <p style={{ color: "blue" }}>{institute}</p>
            <p>{degree}</p>
            <p>{graduation_year}</p>
            <p>{locations}</p>
          </div>
          <div>
            <p>.</p>
          </div>
        </CareerPath>
        <CareerPath>
          {educations?.map((item, index) => (
            <div index>
              <p style={{ color: "blue" }}>{item.institute}</p>
              <p>{item.degree}</p>
              <p>{item.graduation_year}</p>
              <p>{item.location}</p>
              {/* <hr /> */}
            </div>

            // <Grid item xs={4} key={index}>

            // </Grid>
          ))}
        </CareerPath>
      </div>
      <hr />
      <div>
        <CareerPath>
          <div>
            <Typography variant="h6">Skill</Typography>

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
          <div>
            <Typography variant="h6">Language</Typography>

            <ul>
              <li>{language}</li>
            </ul>
            <ul>
              {lan?.map((item, index) => (
                <li index>{item.language}</li>

                // <Grid item xs={4} key={index}>

                // </Grid>
              ))}
            </ul>
          </div>
        </CareerPath>
        <hr class="dashed-line" />
      </div>
      {/* </Paper> */}
    </div>
  );
}

export default Template;
