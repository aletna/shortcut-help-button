import { useState, useEffect } from "react";
import styled from "styled-components";

const commandList = [
  {
    id: 0,
    command: { mac: "CMD + K", other: "ALT + K" },
    description: "Open the command pallete",
  },
  {
    id: 1,
    command: { mac: "J or K", other: "J or K" },
    description: "Go up and down the list",
  },
  {
    id: 2,
    command: { mac: "Enter", other: "Enter" },
    description: "When ticket is open, focus the response field",
  },
  {
    id: 3,
    command: { mac: "CMD + Enter", other: "ALT + Enter" },
    description: "Submit ticket response. (choose status)",
  },
  {
    id: 4,
    command: { mac: "Esc", other: "Esc" },
    description: "Exit/unfocus",
  },
  {
    id: 5,
    command: { mac: "CMD + Arrow", other: "ALT + Arrow" },
    description: "Change ticket",
  },
];

const HelpList = ({ reference, className }) => {
  const [device, setDevice] = useState();

  useEffect(() => {
    let mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    if (mac) {
      setDevice("mac");
    } else {
      setDevice("other");
    }
  }, []);

  const lastItem = (idx) => {
    if (idx === commandList.length - 1) {
      return true;
    }
    return false;
  };

  return (
    <ListWrapper className={className} ref={reference}>
      {device && (
        <>
          {commandList.map((item, index) => (
            <ListElement
              key={item.id}
              className={`${lastItem(index) && "noBorder"}`}
            >
              <ListCommand>
                {device === "mac" ? item.command.mac : item.command.other}
              </ListCommand>
              <ListDescription>{item.description}</ListDescription>
            </ListElement>
          ))}
        </>
      )}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  position: absolute;
  width: 450px;
  right: 2px; /*24px - 22px */
  bottom: 38px; /*56px - 18px */

  background: #f6f6f6;
  border: 1px solid #ecedf2;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 1px 6px rgba(105, 105, 124, 0.1),
    1px 2px 4px rgba(105, 105, 124, 0.15);
`;

const ListElement = styled.div`
  border-bottom: 1px solid #ececec;
  padding-top: 2px; /* 4px y-padding + min-height of 26px = 30px */
  padding-bottom: 2px;
  min-height: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  &:hover {
    background-color: #ececec;
  }
`;

const ListCommand = styled.div`
  color: #222222;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  padding-left: 24px;
  padding-right: 12px;
`;

const ListDescription = styled.div`
  color: #555555;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 3;
  font-size: 12px;
  line-height: 15px;
  padding-left: 12px;
  padding-right: 24px;
`;

export default HelpList;
