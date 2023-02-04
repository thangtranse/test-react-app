import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DifferenceReduxReducer() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Có thể thay thế Redux bằng React Hooks không?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Câu trả lời là có!
            <br />
            Tuy nhiên chỉ khi mà App của bạn có quy mô nhỏ, không nhiều state và
            bạn chỉ muốn chia sẻ state giữa các Component thì bạn hoàn toàn có
            thể sử dụng useContext để thay thế cho Redux.
            <br />
            Còn nếu như App của bạn cần phải xử lý nhiều logic phức tạp thì lúc
            này bạn nên dùng sagas hoặc là middleware của Redux. Ngoài ra Redux
            còn cung cấp cho chúng ta một vài lợi thế quan trọng:
          </Typography>
          <ul>
            <li>
              <Typography>
                Browser Tools: bạn có thể sử dụng React Dev Tools để debug ứng
                dụng của mình. Nó cho phép chúng ta xem lại các dispatched
                actions, kiểm tra state và time travel. Bạn có thể chuyển đổi
                qua lại lịch sử của action và kiểm tra state trông như thế nào
                sau mỗi dispatched action.
              </Typography>
            </li>
            <li>
              <Typography>
                Testing: Redux dựa trên các pure function nên dễ dàng thực hiện
                kiểm thử. Tất cả các bài test đều tập trung vào việc kiểm tra
                outputs dựa trên các inputs đã cho.
              </Typography>
            </li>
            <li>
              <Typography>
                Patterns và tổ chức code: Redux được nghiên cứu kỹ lưỡng và có
                công thức cho hầu hết các vấn đề. Có một phương pháp gọi là
                Ducks mà bạn có thể sử dụng để tổ chức code Redux.
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
