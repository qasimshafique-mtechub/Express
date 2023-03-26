import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Contact from "./Contact";
import Objective from "./Objective";
import Experience from "./Experience";
import Skill from "./Skill";
import Education from "./Education";
import Language from "./Language";
import {
  useAddContactMutation,
  useAddEducationMutation,
  useAddExperienceMutation,
  useAddLanguageMutation,
  useAddObjectiveMutation,
  useAddSkillMutation,
} from "../../../services/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { setContactInfo } from "../../../features/Resume2/Contact";
import Navbar from "../../../Components/Navbar";

const steps = [
  "Contact",
  "Objective",
  "Education",
  "Experience",
  "Skill",
  "Language",
];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Contact />;
    case 1:
      return <Objective />;
    case 2:
      return <Education />;
    case 3:
      return <Experience />;
    case 4:
      return <Skill />;
    case 5:
      return <Language />;
    //   case 6:
    //     return <Experience />;
    default:
      throw new Error("Unknown step");
  }
}
function Resume2() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [addContact] = useAddContactMutation();
  const [addObjective] = useAddObjectiveMutation();
  const [addSkill] = useAddSkillMutation();
  const [addEducation] = useAddEducationMutation();
  const [addExperience] = useAddExperienceMutation();
  const [addLanguage] = useAddLanguageMutation();

  const firstname = useSelector((state) => state.resumecontact.firstname);
  const lastname = useSelector((state) => state.resumecontact.lastname);
  const email = useSelector((state) => state.resumecontact.email);
  const address = useSelector((state) => state.resumecontact.address);
  const contact_number = useSelector(
    (state) => state.resumecontact.contact_number
  );
  const random_id = useSelector((state) => state.resumecontact.random_id);
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
  const dispatch = useDispatch();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  console.log(lastname, "lastname");
  const handleNext = async () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    if (activeStep === 0) {
      const ActualData = {
        surname: lastname,
        first_name: firstname,
        address: address,
        email: email,
        random_id: random_id,
        contact_number: contact_number,
      };

      // const formdata = new FormData();
      // formdata.append("surname", lastname);
      // formdata.append("first_name", firstname);
      // formdata.append("address", address);
      // formdata.append("email", email);
      // formdata.append("random_id",  7921);
      // formdata.append("contact_number", contact_number);
      if (random_id === null) {
        const res = await addContact(ActualData).then((response) => {
          sessionStorage.setItem("random_id", response.data.contact.random_id);
          dispatch(
            setContactInfo({
              firstname: firstname,
              lastname: lastname,
              address: address,
              email: email,
              contact_number: contact_number,
              random_id: sessionStorage.getItem("random_id"),
            })
          );
        });
      } else {
        const res = await addContact(ActualData).then((response) => {
          console.log(response, "success");
        });
      }
    } else if (activeStep === 1) {
      const ActualData = {
        description: content,
        random_id: random_id,
      };
      if (random_id === null) {
        const res = await addObjective(ActualData).then((response) => {
          console.log(response, "ActualData");
          sessionStorage.setItem(
            "random_id",
            response.data.Objective.random_id
          );
          dispatch(
            setContactInfo({
              firstname: firstname,
              lastname: lastname,
              address: address,
              email: email,
              contact_number: contact_number,
              random_id: sessionStorage.getItem("random_id"),
            })
          );
        });
      } else {
        const res = await addObjective(ActualData).then((response) => {
          console.log(response, "success");
        });
      }
    } else if (activeStep === 2) {
      const ActualData = {
        institute: institute,
        locations: degree,
        degree: degree,
        graduation_year: graduation_year,
        location: locations,
        description: notes,
        random_id: random_id,
        educations: educations,
      };
      if (random_id === null) {
        const res = await addEducation(ActualData).then((response) => {
          console.log(response, "ActualData");
          // sessionStorage.setItem(
          //   "random_id",
          //   response.data.Education.random_id
          // );
          dispatch(
            setContactInfo({
              firstname: firstname,
              lastname: lastname,
              address: address,
              email: email,
              contact_number: contact_number,
              random_id: sessionStorage.getItem("random_id"),
            })
          );
        });
      } else {
        const res = await addEducation(ActualData).then((response) => {
          console.log(response, "success");
        });
      }
    } else if (activeStep === 3) {
      const ActualData = {
        position: position,
        company: company,
        locations: location,
        start_date: start_date,
        end_date: end_date,
        notes: notes,
        random_id: random_id,
        experiences: exp,
      };
      if (random_id === null) {
        const res = await addExperience(ActualData).then((response) => {
          console.log(response, "ActualData");
          // sessionStorage.setItem(
          //   "random_id",
          //   response.data.Education.random_id
          // );
          dispatch(
            setContactInfo({
              firstname: firstname,
              lastname: lastname,
              address: address,
              email: email,
              contact_number: contact_number,
              random_id: sessionStorage.getItem("random_id"),
            })
          );
        });
      } else {
        const res = await addExperience(ActualData).then((response) => {
          console.log(response, "success");
        });
      }
    } else if (activeStep === 4) {
      console.log(activeStep, "active");
      const ActualData = {
        skill: skill,
        level: level,
        skills: skills,
        random_id: random_id,
      };
      if (random_id === null) {
        const res = await addSkill(ActualData).then((response) => {
          console.log(response, "ActualData");
          sessionStorage.setItem("random_id", response.data.Skill.random_id);
          dispatch(
            setContactInfo({
              firstname: firstname,
              lastname: lastname,
              address: address,
              email: email,
              contact_number: contact_number,
              random_id: sessionStorage.getItem("random_id"),
            })
          );
        });
      } else {
        const res = await addSkill(ActualData).then((response) => {
          console.log(response, "success");
        });
      }
    } else if (activeStep === 5) {
      console.log(activeStep, "active");
      const ActualData = {
        language: language,
        languages: lan,
      };
      if (random_id === null) {
        const res = await addLanguage(ActualData).then((response) => {
          console.log(response, "ActualData");
          // sessionStorage.setItem("random_id", response.data.Skill.random_id);
          dispatch(
            setContactInfo({
              firstname: firstname,
              lastname: lastname,
              address: address,
              email: email,
              contact_number: contact_number,
              random_id: sessionStorage.getItem("random_id"),
            })
          );
        });
      } else {
        const res = await addLanguage(ActualData).then((response) => {
          console.log(response, "success");
        });
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(
      setContactInfo({
        firstname: firstname,
        lastname: lastname,
        address: address,
        email: email,
        contact_number: contact_number,
        random_id: sessionStorage.getItem("random_id"),
      })
    );
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%", marginTop: "60px" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "fixed",
                  left: "120px",
                  bottom: "100px",
                  pt: 2,
                }}
              >
                <button
                  className="btn btn-warning"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  style={{ marginRight: "30px" }}
                >
                  Back
                </button>
                <Box sx={{ flex: "1 1 auto" }} />
                <button className="btn btn-warning" onClick={handleNext}>
                  Next
                </button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={handleComplete}
                      style={{ marginLeft: "30px" }}
                    >
                      {" "}
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </>
  );
}

export default Resume2;
