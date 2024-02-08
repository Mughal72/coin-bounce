import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBlogById,
  deleteBlog,
  postComment,
  getCommentsById,
} from "../../api/internal";
import styles from "./BlogDetails.module.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function BlogDetails() {
  const [blog, setBlog] = useState([]);
  const [comments, setComments] = useState([]);
  const [ownsBlog, setOwnsBlog] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [reload, setReload] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const blogId = params.id;

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.meta}>
          <p>
            @{blog.author + " on " + new Date(blog.createdAt).toDateString()}
          </p>
        </div>
        <div className={styles.photo}>
          <img src={blog.phot} width={250} height={250} alt="" />
        </div>
        <p className={styles.content}>{blog.content}</p>
        {ownsBlog && (
          <div className={styles.controls}>
            <button className={styles.edit}>Edit</button>
            <button className={styles.delete}>Delete</button>
          </div>
        )}
      </div>
      <div className={styles.right}>
        
      </div>
    </div>
  );
}

export default BlogDetails;
