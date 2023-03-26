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
function Corporate() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

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

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
    <Box sx={{ width: "100%" }}>
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
                bottom: "0px",
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
  );
}

export default Corporate;
