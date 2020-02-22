import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { format } from 'date-fns';
import { resetSelectedEmployeeId } from '../../containers/App/actions';

const EmployeeLightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? 'block' : 'none')};
  background-color: rgb(255,255,255, 0.75);
`;

const EmployeeLightboxContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 90%;
  height: auto;
  min-height: 75%;
  max-height: 75%;
  margin: auto;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid black;

  @media (min-width: 320px) and (max-width: 991px) and (orientation: landscape) {
    flex-direction: row;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 50%;
    height: 60%;
    min-height: 300px;
    max-height: unset;
    flex-direction: row;
  }
`;

const EmployeeLightboxContentColumnLeft = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 30%;
  box-sizing: border-box;
  margin-bottom: 30px;

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    margin-bottom: 0;
    padding-right: 30px;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

const EmployeeLightboxContentColumnRight = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 70%;
  box-sizing: border-box;

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    padding-top: 80px;
  }
`;

const EmployeeLightboxClose = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    display: block;
    fill: black;    
  }
`;

const EmployeeLightboxAvatar = styled.img`
  width: 128px;
  height: 128px;
  margin-bottom: 15px;
  display: block;
  border: 1px solid black;

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 100%;
    height: auto;
  }
`;

const EmployeeLightboxName = styled.div`
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
`;

const EmployeeLightbox = () => {
  const { selectedEmployeeId, selectedEmployeeDetails } = useSelector((state) => ({
    selectedEmployeeId: state.global.selectedEmployeeId,
    selectedEmployeeDetails: state.global.employees.find(
      (employee) => employee.id === state.global.selectedEmployeeId,
    ),
  }));
  const dispatch = useDispatch();
  const lightboxRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = (event) => {
    if (lightboxRef.current.contains(event.target)) {
      return;
    }

    // click outside
    if (selectedEmployeeId !== null) {
      dispatch(resetSelectedEmployeeId());
    }
  };

  useEffect(() => {
    // add when mounted
    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  const renderEmployeeDetailsColumnLeft = () => {
    if (selectedEmployeeDetails) {
      const {
        avatar,
        jobTitle,
        age,
        dateJoined,
        firstName,
        lastName,
      } = selectedEmployeeDetails;
      const joinDate = new Date(dateJoined);

      const fallbackAvatar = (event) => {
        // eslint-disable-next-line no-param-reassign
        event.target.src = 'https://via.placeholder.com/128';
      };

      return (
        <>
          <EmployeeLightboxAvatar src={avatar} onError={fallbackAvatar} alt={`${firstName} ${lastName}`} />
          <p>{jobTitle}<br />Age: {age}<br />{format(joinDate, "'Joined: ' dd/MM/yyyy")}</p>
        </>
      );
    }

    return null;
  };

  const renderEmployeeDetailsColumnRight = () => {
    if (selectedEmployeeDetails) {
      const {
        firstName,
        lastName,
        bio,
      } = selectedEmployeeDetails;

      return (
        <>
          <EmployeeLightboxName>{`${firstName} ${lastName}`}</EmployeeLightboxName>
          <hr />
          {bio}
        </>
      );
    }

    return null;
  };

  return (
    <EmployeeLightboxOverlay active={selectedEmployeeId !== null}>
      <EmployeeLightboxContent ref={lightboxRef}>
        <EmployeeLightboxClose onClick={() => dispatch(resetSelectedEmployeeId())}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </EmployeeLightboxClose>
        <EmployeeLightboxContentColumnLeft>
          {renderEmployeeDetailsColumnLeft()}
        </EmployeeLightboxContentColumnLeft>
        <EmployeeLightboxContentColumnRight>
          {renderEmployeeDetailsColumnRight()}
        </EmployeeLightboxContentColumnRight>
      </EmployeeLightboxContent>
    </EmployeeLightboxOverlay>
  );
};

export default EmployeeLightbox;
