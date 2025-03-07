import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl p-4  bg-gradient-to-br from-blue-100 to-blue-400">
        <div className="w-full justify-center mb-4 ">
          <div class="relative ">
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
           
          </div>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
