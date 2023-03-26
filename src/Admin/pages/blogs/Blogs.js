import React from "react";
import {
  useGetAllBlogQuery,
  useGetBlogTitleQuery,
} from "../../../services/AuthApi";
import { getToken } from "../../../services/LocalStorage";
import {
  BlogDescription,
  BlogHeading,
  Card,
  CardImage,
} from "../../../styles/Blog";
// AiOutlineLoading3Quarters
import { Preloader, Oval } from "react-preloader-icon";

import { Box, Grid } from "@mui/material";
import { Row, Col } from "antd";
import { color } from "@mui/system";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";

function Blogs() {
  const token = getToken();
  const responseInfo = useGetBlogTitleQuery();

  console.log(useGetBlogTitleQuery(), 'sdsddssd')
  const { data, isSuccess, isError, isLoading } = useGetAllBlogQuery();
  console.log(
    useGetBlogTitleQuery(),
    "useGetBlogTitleQuery({ token })"
  );

  if (isLoading) {
    return (
      <Preloader
        use={Oval}
        size={80}
        strokeWidth={6}
        strokeColor="#262626"
        duration={2000}
      />
      // use={Oval}
      // size={80}
      // strokeWidth={6}
      // strokeColor="#262626" duration={2000}
    );
  }
  return (
    <>
      <Navbar />
      <BlogHeading>{responseInfo.data.blog.title}</BlogHeading>
      <BlogDescription>{responseInfo.data.blog.description}</BlogDescription>
      <Row>
        <Col span={1}></Col>
        <Col span={23}>
          {" "}
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={5}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <>
                {isSuccess && (
                  <>
                    {data?.blog?.map((item, index) => (
                      <Grid item xs={4} key={index}>
                        <Link to={`${item.id}`}>
                          <Card class="card">
                            <CardImage
                              src={`http://127.0.0.1:8000/storage/blog/${item.image}`}
                              class="card-img-top"
                              alt="..."
                            />
                            <div
                              class="card-body"
                              style={{ background: "#efefef" }}
                            >
                              <h5 class="card-title">{item.title}</h5>
                              <p class="card-text">
                                {item.description
                                  .replace(/<[^>]+>/g, "")
                                  .slice(0, 300)}
                              </p>
                            </div>
                          </Card>
                        </Link>
                      </Grid>
                    ))}
                  </>
                )}
              </>
            </Grid>
          </Box>
        </Col>
      </Row>
    </>
  );
}

export default Blogs;
