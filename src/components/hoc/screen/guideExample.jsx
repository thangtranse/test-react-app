import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import WithWidthScreenHook from "./";

const CodeExampleRender = {
  ScreenWidth: {
    useScreenWidth: `import { useEffect, useState } from "react";
  
  // CUSTOM HOOK
  export function useScreenWidth() {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handler = (event) => {
        setWidth(event.target.innerWidth);
      };
  
      window.addEventListener("resize", handler);
  
      return () => {
        window.removeEventListener("resize", handler);
      };
    }, []);
  
    return width;
  }`,
    withWidthScreenHook: `import React from "react";
  import { useScreenWidth } from "./useScreenWidth";
  
  export default function withWidthScreenHook(Component) {
    return function (props) {
      const widthScreen = useScreenWidth();
      return <Component width={widthScreen} {...props} />;
    };
  }`,
    index: `import React from "react";
  import withWidthScreenHook from "./withWidthScreenHook";
  
  class App extends React.Component {
    render() {
      return <p>Wdith: {this.props.width}</p>;
    }
  }
  
  export default withWidthScreenHook(App);`,
  },
};

export default function GuideExample({ propExpanded, onChangeAccordion }) {
  return (
    <>
      <Accordion
        expanded={propExpanded === "panel2"}
        onChange={onChangeAccordion("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Tính kích thước Width của màn hình
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Mục đích của nó là lấy chiều rộng màn hình thực tế, ở mọi khung hình
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flexGrow: 2 }}>
              <Typography>
                <CopyBlock
                  language={"jsx"}
                  text={CodeExampleRender.ScreenWidth.useScreenWidth}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
                <br />
                <CopyBlock
                  language={"jsx"}
                  text={CodeExampleRender.ScreenWidth.withWidthScreenHook}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
                <br />
                <CopyBlock
                  language={"jsx"}
                  text={CodeExampleRender.ScreenWidth.index}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={false}
                  codeBlock
                />
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }}>
              <WithWidthScreenHook />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
