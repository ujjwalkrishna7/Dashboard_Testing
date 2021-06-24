import MotionHoc from "./MotionHoc";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import Posts from "../Components/Profile/Posts";

const ProfileMainContainer = styled.aside`
  background-color: var(--black);
  margin-bottom: 100px;
  border: 1px solid var(--grey-light);
`;

const CoverImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProfileCard = styled.div`
  padding: 20px;
  border-radius: 0 0 15px 15px;
  background-color: var(--black);
  text-align: center;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.15);
  overflow-wrap: break-word;
  height: 350px;
`;

const ProfileCardContainer = styled.aside`
  position: relative;
  top: -87.5px;
`;

const ProfilePic = styled.img`
  height: 175px;
  width: 175px;
  object-fit: cover;
  border-radius: 50%;
  padding: 5px;
  background: var(--grey-light);
`;

const Title = styled.h3`
  padding-top: 10px;
`;

const EditProfileButton = styled.button`
  margin-top: 10px;
  padding: 5px 15px;
  border-radius: 25px;
  color: var(--black);
  background: var(--secondary);
  border: none;

  :hover {
    background: var(--secondary-dark);
  }
`;

const Followers = styled.div`
  font-size: 1rem;
  text-align: start;
`;

const FollowersCount = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: start;
  color: var(--secondary);
`;

const ProfileDetailsContainer = styled.aside`
  padding: 20px;
  overflow-wrap: break-word;
`;

const ProfileDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;
const SubDetails = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--grey);
`;

const AppointementButton = styled.button`
  padding: 10px 15px;
  font-size: 0.9rem;
  border-radius: 25px;
  color: var(--black);
  background: var(--secondary);
  border: none;

  :hover {
    background: var(--secondary-dark);
  }
`;

const FadeBorderLine = styled.div`
  margin: 15px 0 15px 0;
  display: block;
  border: none;
  height: 1px;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    350,
    from(var(--grey-light)),
    to(var(--black))
  );
`;

const FeedContainer = styled.aside`
  overflow-wrap: break-word;
`;

const FeedTitle = styled.h4`
  text-align: center;
  color: var(--secondary);
`;

const ButtonContainer = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadMoreButton = styled.button`
  margin: 20px 0;
  padding: 5px 15px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: var(--black);
  background: var(--secondary-light);
  border: none;

  :hover {
    background: var(--secondary);
  }
`;

const ProfileComponent = () => {
  return (
    <ProfileMainContainer>
      <CoverImage src="https://images.moneycontrol.com/static-mcnews/2019/11/Cybertruck-5.png" />
      <Row>
        <Col sm={12} md={6} lg={3}>
          <ProfileCard>
            <ProfileCardContainer>
              <ProfilePic src="https://g.foolcdn.com/art/companylogos/square/tsla.png" />
              <Title>Tesla</Title>
              <EditProfileButton>
                <FiEdit /> Edit Profile
              </EditProfileButton>
              <Row className="mt-4">
                <Col>
                  <Followers>FOLLOWER :</Followers>
                  <FollowersCount>10K</FollowersCount>
                </Col>
                <Col>
                  <Followers>FOLLOWING :</Followers>
                  <FollowersCount>100</FollowersCount>
                </Col>
              </Row>
            </ProfileCardContainer>
          </ProfileCard>
        </Col>
        <Col sm={12} md={6} lg={9}>
          <ProfileDetailsContainer>
            <Row>
              <Col lg={9}>
                <ProfileDescription>
                  Tesla’s mission is to accelerate the world’s transition to
                  sustainable energy.
                </ProfileDescription>
                <SubDetails>2003 | Automotive | Palo Alto, CA</SubDetails>
                <FadeBorderLine />
                <FeedContainer>
                  <FeedTitle>
                    <CgFeed /> Company Feed
                  </FeedTitle>
                  <Posts />
                  <ButtonContainer>
                    <LoadMoreButton>Load More..</LoadMoreButton>
                  </ButtonContainer>
                </FeedContainer>
              </Col>
              <Col lg={3}>
                <ButtonContainer>
                  <AppointementButton>
                    <BsCalendar /> Check Availability
                  </AppointementButton>
                </ButtonContainer>
              </Col>
            </Row>
          </ProfileDetailsContainer>
        </Col>
      </Row>
    </ProfileMainContainer>
  );
};

const Profile = MotionHoc(ProfileComponent);

export default Profile;
