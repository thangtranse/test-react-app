import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const SuccessSlider = styled(Slider)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

function StyleCustom() {
  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Box sx={{ width: 300 }}>
          <Typography variant="h6" gutterBottom>
            Ko edit
          </Typography>
          <Slider
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ width: 300 }}>
          <Typography variant="h6" gutterBottom>
            Đã edit theo <b>styled</b>
          </Typography>
          <SuccessSlider
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ width: 300 }}>
          <Typography variant="h6" gutterBottom>
            Đã edit theo <b>xs</b>
          </Typography>
          <Slider
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
            sx={{
              width: 300,
              color: "success.main",
              "& .MuiSlider-thumb": {
                borderRadius: "1px",
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default StyleCustom;
