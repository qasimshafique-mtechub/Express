import React, { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";
import Navbar from "../../Components/Navbar";
import { AuthForm } from "../../styles/Global";
import { LoginForm } from "../../styles/Login";
import dayjs from "dayjs";
import styled from "styled-components";
import {
  EducationHeading,
  ExperienceHeading,
  ProfileForm,
  ProfileHeading,
  RoundButton,
  UploadContainer,
  UploadImage,
  UploadInput,
} from "../../styles/Profile.styled";
import { Preloader, Oval } from "react-preloader-icon";
import { Input, DatePicker, Checkbox } from "antd";
import {
  useAddProfileMutation,
  useGetProfileQuery,
} from "../../services/AuthApi";
import { getToken, removeToken } from "../../services/LocalStorage";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
function Profile() {
  const editor = useRef(null);
  const [post, setPost] = useState({
    title: "",
    content:
      "HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content",
  });
  const onStartChange = (date, dateString) => {
    console.log(date, dateString);
    setcurrent(true);
    setend_date_show(!end_date_show);
    setstart_date(dateString);
    console.log(current, "sss");
  };
  const onEndChange = (date, dateString) => {
    console.log(dateString);
    setend_date(dateString);
  };

  const onGraduationChange = (date, dateString) => {
    console.log(date, dateString);
    setgraduation_year(dateString);
  };
  const [student, setStudent] = useState({
    contact_number: "",
    username: "",
    institute: "",
    degree: "",
    education_notes: "",
    position: "",
    company: "",
    graduation_year: "",
    start_date: "",
    end_date: "",
    location: "",
    experience_notes: "",
    current: "",
  });
  function onTextFieldChange(e) {
    console.log("first");
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  const [contact_number, setcontact_number] = useState("03175053701");
  const [username, setusername] = useState("Qasim");
  const [institute, setinstitute] = useState("Iqra");
  const [degree, setdegree] = useState("MCS");
  const [education_notes, seteducation_notes] = useState("Notes");
  const [position, setposition] = useState("Web developer");
  const [company, setcompany] = useState("Mtechub");
  const [graduation_year, setgraduation_year] = useState(dayjs("2023-03-24"));
  const [start_date, setstart_date] = useState(dayjs("2023-03-24"));
  const [end_date, setend_date] = useState(dayjs("2023-03-24"));
  const [location, setlocation] = useState("ssss");
  const [experience_notes, setexperience_notes] = useState("ssss");
  const [current, setcurrent] = useState(false);
  const [end_date_show, setend_date_show] = useState(true);
  const [Image, setImage] = useState("/image/profile.png");
  const [images, setimages] = useState("");

  const contentFieldChanaged = (data) => {
    seteducation_notes(data);
    // setPost({ ...post, content: data });
  };
  const experiencenotesChanaged = (data) => {
    setexperience_notes(data);
    // setPost({ ...post, content: data });
  };

  const [addProfile] = useAddProfileMutation();

  const onPositionChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setcurrent(!current);
    setend_date_show(!end_date_show);
    console.log(current, "sss");
  };
  console.log(education_notes, "education_notes");
  const token = getToken();
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setimages(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  // get data  from id
  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/user/profile",
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(student.data, "data");
        setStudent(student.data);
        setImage(`http://127.0.0.1:8000/storage/profile/${student.data.image}`);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, []);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetProfileQuery(token);
  console.log(useGetProfileQuery(token), "useGetProfileQuery(token)");
  const submit = async (e) => {
    e.preventDefault();
    const ActualData = {
      institute_location: student.institute_location,
      graduation_year: graduation_year,
      current: current,
    };
    console.log(ActualData, "ActualData");
    const formdata = new FormData();
    formdata.append("contact_number", student.contact_number);
    formdata.append("username", student.username);
    formdata.append("institute", student.institute);
    formdata.append("degree", student.degree);
    formdata.append("institute_location", student.institute_location);
    formdata.append("graduation_year", graduation_year);
    formdata.append("education_notes", education_notes);
    formdata.append("position", student.position);
    formdata.append("company", student.company);
    formdata.append("start_date", start_date);
    formdata.append("end_date", end_date);
    formdata.append("experience_notes", experience_notes);
    formdata.append("current", student.current);
    formdata.append("location", student.location);
    formdata.append("image", images);
    console.log(formdata, "form data");
    const res = await addProfile({ token, formdata })
      .then((resp) => {
        console.log(resp, "res");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  const ConfirmButton = styled.button`
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  `;

  if (isLoading) {
    return (
      <Preloader
        use={Oval}
        size={80}
        strokeWidth={6}
        strokeColor="#262626"
        duration={2000}
      />
    );
  }
  const logout = () => {
    Swal.fire({
      title: "Confirmation",
      text: `DO you really want to logout`,
      showDenyButton: true,
      showCloseButton: true,
      //   confirmButtonColor: "#0000",
      //   DenyButtonColor: "#fff",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        removeToken("Token");
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <Navbar />

      <div className="container" style={{ marginTop: "70px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ProfileHeading>Account Information</ProfileHeading>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "10px", borderRadius: "7px" }}
            >
              Chnage password
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ marginLeft: "10px", borderRadius: "7px" }}
            >
              <i className="fa fa-cog" aria-hidden="true"></i>ssss
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="staticBackdropLabel"
                      style={{ color: "blue" }}
                    >
                      Setting
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div class="container">
                      <div class="row">
                        <div class="col">

                          <Paper>
                          <h1>Privacy</h1>
                          <br />
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            tellus eget condimentum rhoncus, sem quam semper
                            libero, sit amet adipiscing sem neque sed ipsum. Nam
                            quam nunc, blandit vel, luctus pulvinar, hendrerit
                            id, lorem. Maecenas nec odio et ante tincidunt
                            tempus. Donec vitae sapien ut libero venenatis
                            faucibus. Nullam quis ante. Etiam sit amet orci eget
                            eros faucibus tincidunt. Duis leo. Sed fringilla
                            mauris sit amet nibh. Donec sodales sagittis magna.
                            Sed consequat, leo eget bibendum sodales, augue
                            velit cursus nunc,
                          </Paper>
                        </div>
                        <div class="col">
                          <Paper>
                          <h1>Setting</h1>
                          <br />
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            tellus eget condimentum rhoncus, sem quam semper
                            libero, sit amet adipiscing sem neque sed ipsum. Nam
                            quam nunc, blandit vel, luctus pulvinar, hendrerit
                            id, lorem. Maecenas nec odio et ante tincidunt
                            tempus. Donec vitae sapien ut libero venenatis
                            faucibus. Nullam quis ante. Etiam sit amet orci eget
                            eros faucibus tincidunt. Duis leo. Sed fringilla
                            mauris sit amet nibh. Donec sodales sagittis magna.
                            Sed consequat, leo eget bibendum sodales, augue
                            velit cursus nunc,
                          </Paper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ marginLeft: "10px", borderRadius: "7px" }}
              onClick={logout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>
            </button>
          </div>
        </div>

        <EducationHeading>
          <ProfileHeading>Education</ProfileHeading>
        </EducationHeading>

        <ExperienceHeading>
          <ProfileHeading>Experience</ProfileHeading>
        </ExperienceHeading>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <form>
              <UploadContainer>
                <br />
                <br />
                <br />
                <br />
                <br />

                <UploadImage src={Image} />
                <RoundButton className="round">
                  <UploadInput
                    id="file-input"
                    type="file"
                    onChange={handleFileInputChange}
                  />
                  <i className="fa fa-camera"></i>
                </RoundButton>
              </UploadContainer>
              <br />
              <br />
              <div className="row">
                <div className="col">
                  <Input
                    placeholder="User Name"
                    name="username"
                    style={{ width: "413px", height: "46px" }}
                    value={student.username}
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
                <div className="col">
                  <Input
                    placeholder="Phone Number"
                    name="contact_number"
                    style={{ width: "413px", height: "46px" }}
                    value={student.contact_number}
                    onChange={(e) => onTextFieldChange(e)}
                  />{" "}
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col">
                  <Input
                    placeholder="Institute Name"
                    name="institute"
                    style={{ width: "413px", height: "46px" }}
                    value={student.institute}
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
                <div className="col">
                  <Input
                    placeholder="Degree"
                    name="degree"
                    style={{ width: "413px", height: "46px" }}
                    value={student.degree}
                    onChange={(e) => onTextFieldChange(e)}
                  />{" "}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <DatePicker
                    placeholder="Graduation year"
                    name="graduation_year"
                    onChange={onGraduationChange}
                    style={{
                      width: "78%",
                    }}
                    size="large"
                  />
                </div>
                <div className="col">
                  <Input
                    placeholder="Location"
                    name="institute_location"
                    style={{ width: "413px", height: "46px" }}
                    value={student.institute_location}
                    onChange={(e) => onTextFieldChange(e)}
                  />{" "}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <JoditEditor
                    style={{ width: "960px" }}
                    ref={editor}
                    value={education_notes}
                    onChange={(newContent) => contentFieldChanaged(newContent)}
                  />{" "}
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col">
                  <Input
                    placeholder="Position"
                    name="position"
                    style={{ width: "413px", height: "46px" }}
                    value={student.position}
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
                <div className="col">
                  <Input
                    placeholder="Company"
                    name="company"
                    style={{ width: "413px", height: "46px" }}
                    value={student.company}
                    onChange={(e) => onTextFieldChange(e)}
                  />{" "}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <DatePicker
                    name="start_date"
                    onChange={onStartChange}
                    style={{
                      width: "78%",
                    }}
                    size="large"
                  />
                </div>
                <div className="col">
                  {end_date_show ? (
                    <DatePicker
                      placeholder="End Date"
                      onChange={onEndChange}
                      style={{
                        width: "78%",
                      }}
                      size="large"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <Input
                    placeholder="Location"
                    name="location"
                    style={{ width: "413px", height: "46px" }}
                    value={student.location}
                    onChange={(e) => onTextFieldChange(e)}
                  />
                </div>
                <div className="col"></div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <JoditEditor
                    style={{ width: "89%" }}
                    ref={editor}
                    value={experience_notes}
                    onChange={(newContent) =>
                      experiencenotesChanaged(newContent)
                    }
                  />{" "}
                  <Checkbox onChange={onPositionChange} checked={current}>
                    Position
                  </Checkbox>
                  ;
                </div>
              </div>
              <br />
              <button type="submit" onClick={submit}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
