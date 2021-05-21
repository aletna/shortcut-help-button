import styled from "styled-components";

const HelpButton = ({ reference, clicked }) => {
  return (
    <Button ref={reference} onClick={clicked}>
      <svg
        width="10"
        height="14"
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.00144 0.333374C2.70394 0.333374 0.834778 2.20254 0.834778 4.50004H2.50144C2.50144 3.12171 3.62311 2.00004 5.00144 2.00004C6.37978 2.00004 7.50144 3.12171 7.50144 4.50004C7.50144 5.39087 7.12311 5.72087 6.26728 6.37921C5.94894 6.62421 5.58978 6.90087 5.24561 7.24421C4.15228 8.33671 4.16394 9.41421 4.16811 9.50004V11.1667H5.83478V9.49254C5.83478 9.47254 5.85394 8.9917 6.42394 8.42254C6.69061 8.15587 6.99228 7.92421 7.28311 7.70004C8.16644 7.02004 9.16811 6.25004 9.16811 4.50004C9.16811 2.20254 7.29894 0.333374 5.00144 0.333374ZM4.16811 12H5.83478V13.6667H4.16811V12Z"
          fill="#928A8A"
        />
      </svg>
    </Button>
  );
};

const Button = styled.div`
  border-radius: 100%;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  text-align: center;
  cursor: pointer;
  color: #928a8a;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.1);

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  &:hover {
    background-color: #ececec;
  }
`;

export default HelpButton;
