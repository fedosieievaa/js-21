import React from "react";
import CheckedIcon from "../assets/img/checked.png"

const Post = ({post}) => {
    return(
    <div className="post_container">
        <div>
            <div className="container_img_info">
                <img className="user_photo" src={post.photo}  alt="User" width="100px" />
                <div className="container_info">
                    <div className="user_name">
                        {post.name}
                        <img src={CheckedIcon} alt="Checked icon" />
                    </div>
                    <a className="user_nickname" href="/">{post.nickname}</a>
                    <div className="post_date">{post.date}</div>
                </div>
            </div>

            <div className="post_content">{post.content}</div>
        </div>
        <img className="post_image" src={post.image} alt="Post" width="85%"/> 
        <div className="statistics">
            <span className="statistics_comments">{post.comments}</span>
            <span className="statistics_shares">{post.shares}</span>
            <span className="statistics_likes">{post.likes}</span>
            <span className="statistics_save"></span>
        </div>
    </div>
    )
}

export default Post;