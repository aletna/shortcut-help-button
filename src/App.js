import "./App.css";
import { useState, useRef, useEffect } from "react";
import HelpButton from "./components/HelpButton";
import styled from "styled-components";
import HelpList from "./components/HelpList";

const App = () => {
  // state of help list (Boolean)
  const [showHelpList, setShowHelpList] = useState(false);

  // Refs to detect clicks outside of the HelpWrapper
  const helpListRef = useRef();
  const helpBtntRef = useRef();

  // toggle visibility of help list
  const handleHelpButton = () => {
    setShowHelpList(!showHelpList);
  };

  // check if user clicks outside of the HelpWrapper & close dialog if so
  useEffect(() => {
    function handler(e) {
      if (
        !helpListRef.current?.contains(e.target) &&
        !helpBtntRef.current?.contains(e.target)
      ) {
        setShowHelpList(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <PageWrapper>
      <HelpWrapper>
        <HelpList
          className={showHelpList ? "fadeIn" : "fadeOut"}
          reference={helpListRef}
        />
        <HelpButton reference={helpBtntRef} clicked={handleHelpButton} />
      </HelpWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const HelpWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  right: 22px;
`;

export default App;
