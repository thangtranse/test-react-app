import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import EnhancedUserList from "./";

const CodeExampleRender = {
  HOC: {
    jsx: `//HOC
const withLoading = (WrappedComponent) => {
  return (props) => {
    return props.isLoading ? (
      <div>Loading...</div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};`,
  },
  function_component: {
    jsx: `// Function component render list user
const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};`,
  },
  use_hoc: {
    jsx: `//Use HOC
const EnhancedUserList = withLoading(UserList);`,
  },
};

export default function GuideExample({ propExpanded, onChangeAccordion }) {
  return (
    <>
      <Accordion
        expanded={propExpanded === "panel1"}
        onChange={onChangeAccordion("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Loading and render List
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Sử dụng HOC để thực hiện Loading trong khi chờ fetch Data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flexGrow: 2 }}>
              <Typography>
                <CopyBlock
                  language={"jsx"}
                  text={CodeExampleRender.HOC.jsx}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
                <br />
                <CopyBlock
                  language={"jsx"}
                  text={CodeExampleRender.function_component.jsx}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
                <br />
                <CopyBlock
                  language={"jsx"}
                  text={CodeExampleRender.use_hoc.jsx}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={false}
                  codeBlock
                />
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }}>
              <EnhancedUserList
                isLoading={false}
                users={[{ id: 1, name: "Tran Minh Thang" }]}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
