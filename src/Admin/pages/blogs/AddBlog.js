import { useState } from "react";
import { useEffect } from "react";

import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useAddBlogMutation } from "../../../services/AuthApi";
import { getToken } from "../../../services/LocalStorage";
import Navbar from "../../../Components/Navbar";
const AddPost = () => {
  const editor = useRef(null);
  // const [content,setContent] =useState('')
  const [categories, setCategories] = useState([]);
  const [images, setimage] = useState("");

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  //   const [image, setImage] = useState(null);

  // const config={
  //     placeholder:"Start typing...",

  // }
  // validation

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    // errors,
    reset,
  } = useForm();
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  //field changed function
  const fieldChanged = (event) => {
    // console.log(event)
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChanaged = (data) => {
    setPost({ ...post, content: data });
  };

  //create post function
  const createPost = (event) => {
    event.preventDefault();
  };

  //   //handling file chagne event
  //   const handleFileChange = (event) => {
  //     console.log(event.target.files[0]);
  //     setImage(event.target.files[0]);
  //   };

  const token = getToken();
  const [addblog] = useAddBlogMutation();
  console.log(post, "post");
  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("image", images);
    formdata.append("description", post.content);
    const res = await addblog({ formdata, token });
    console.log(res, "res");
  };
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <form
          className="row g-3"
          spacing={3}
          id="formid"
          onSubmit={handleSubmit(onSubmit)}
        >
          <JoditEditor
            ref={editor}
            value={post.content}
            onChange={(newContent) => contentFieldChanaged(newContent)}
          />
          <input type="text" name="title" id="title" {...register("title")} />
          <input
            type="file"
            name="image"
            onChange={(e) => setimage(e.target.files[0])}
          />
          <button type="submit"> save</button>
        </form>
      </div>
    </>
  );
};

export default AddPost;
