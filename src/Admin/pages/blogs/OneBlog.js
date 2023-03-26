import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import { useGetOneBlogQuery } from "../../../services/AuthApi";
import { getToken } from "../../../services/LocalStorage";
import {
  BlogImage,
  BlogSingleDescription,
  BlogTitle,
} from "../../../styles/Blog";
import { Preloader, Oval } from "react-preloader-icon";

function OneBlog() {
  const { id } = useParams();
  const token = getToken();
  const { data, isLoading } = useGetOneBlogQuery(id);
  console.log(useGetOneBlogQuery(id), "aaaaa");
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
      <BlogImage
        src={`http://127.0.0.1:8000/storage/blog/${data.blog.image}`}
        class="card-img-top"
        alt="..."
      />

      <BlogTitle>{data.blog.title} </BlogTitle>
      <div className="col">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <BlogSingleDescription>
              {data.blog.description.replace(/<[^>]+>/g, '')}
            </BlogSingleDescription>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneBlog;
