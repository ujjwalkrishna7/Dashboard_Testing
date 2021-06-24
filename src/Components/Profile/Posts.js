import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineEdit, AiFillStar } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";

const PostCardContainer = styled.aside`
  margin-top: 20px;
  padding: 20px;
  overflow-wrap: break-word;
  background: var(--black);
  border-radius: 15px;
  border: 1px solid var(--grey-light);
  text-align: start;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
`;

const ProfilePic = styled.img`
  height: 35px;
  width: 35px;
  object-fit: cover;
  border-radius: 50%;
  padding: 1px;
  background: var(--grey-light);
`;

const PostTitle = styled.div`
  display: inline;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  color: (--white);
`;
const PostTime = styled.div`
  display: inline;
  padding: 0;
  padding-left: 5px;
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--grey);
`;

const EditPost = styled.div`
  display: inline;
  padding: 0;
  padding-left: 5px;
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--grey);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

const PostDetails = styled.div`
  margin-top: 5px;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--grey-dark);
`;

const PostImage = styled.img`
  margin-top: 15px;
  width: 100%;
  height: 300px;
  border-radius: 25px;
  object-fit: cover;
`;

const PostFooter = styled.div`
  margin-top: 15px;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--grey);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  left: -8px;

  #postfooter {
    margin: 0 3px 0 8px;
  }
`;

const Posts = () => {
  return (
    <>
      <PostCardContainer>
        <Row>
          <Col lg={1}>
            <ProfilePic src="https://g.foolcdn.com/art/companylogos/square/tsla.png" />
          </Col>
          <Col lg={11}>
            <Row>
              <Col>
                <PostTitle>Tesla</PostTitle>
                <PostTime>
                  <FaRegClock size={11} /> 12 hours
                </PostTime>
              </Col>
              <Col>
                <EditPost>
                  <AiOutlineEdit /> Edit Post
                </EditPost>
              </Col>
            </Row>
            <PostDetails>
              Tesla’s mission is to accelerate the world’s transition to
              sustainable energy through increasingly affordable electric
              vehicles in addition to renewable energy generation and storage.
              California-based Tesla is committed to having the best-in-class in
              safety, performance, and reliability in all Tesla cars.
            </PostDetails>
            <PostFooter>
              <AiFillStar size={16} id="postfooter" />
              420
              <BsFillChatFill size={13} id="postfooter" />
              120
              <IoIosShareAlt size={18} id="postfooter" />
            </PostFooter>
          </Col>
        </Row>
      </PostCardContainer>
      <PostCardContainer>
        <Row>
          <Col lg={1}>
            <ProfilePic src="https://g.foolcdn.com/art/companylogos/square/tsla.png" />
          </Col>
          <Col lg={11}>
            <Row>
              <Col>
                <PostTitle>Tesla</PostTitle>
                <PostTime>
                  <FaRegClock size={11} /> 12 hours
                </PostTime>
              </Col>
              <Col>
                <EditPost>
                  <AiOutlineEdit /> Edit Post
                </EditPost>
              </Col>
            </Row>
            <PostDetails>
              Now Play Cyberpunk, Witcher 3 and other games in Model S Plaid.
            </PostDetails>
            <PostImage src="https://st1.bgr.in/wp-content/uploads/2021/01/Model-S.jpg" />
            <PostFooter>
              <AiFillStar size={16} id="postfooter" />
              3k
              <BsFillChatFill size={13} id="postfooter" />
              390
              <IoIosShareAlt size={18} id="postfooter" />
            </PostFooter>
          </Col>
        </Row>
      </PostCardContainer>
    </>
  );
};

export default Posts;
