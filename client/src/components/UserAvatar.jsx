import { useAuth } from "../context/authContext";
import { styled } from "styled-components";
import Avatar1 from "./avatars/Avatar1";
import Avatar2 from "./avatars/Avatar2";
import Avatar3 from "./avatars/Avatar3";
import Avatar4 from "./avatars/Avatar4";

const AvatarContainer = styled.div`
  width: min-content;
  height: ${props => props.height};
  border-radius: 50%;
`;


function UserAvatar ({ width, height, color }) {
  const { user } = useAuth();

  return (
    <AvatarContainer height={height}>
      {user.avatar === 'avatar1' ? (
        <Avatar1 width={width} height={height} color={color} />
      ) : user.avatar === 'avatar2' ? (
        <Avatar2 width={width} height={height} color={color} />
      ) : user.avatar === 'avatar3' ? (
        <Avatar3 width={width} height={height} color={color} />
      ) : (
        <Avatar4 width={width} height={height} color={color} />
      )}
    </AvatarContainer>
  );
}

export default UserAvatar;
