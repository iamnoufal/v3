import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useRef, useState } from "react";
import Heading from "../heading";
import SubHeading from "../subheading";
import { motion } from "framer-motion";
import educationData from "@/data/education";
import Fade from "../fade";

const EducationComponent = () => {
  const edu = useRef(null);
  const small = useMediaQuery("(max-width: 600px)");
  const medium = useMediaQuery("(max-width: 950px)");
  return (
    <Box
      sx={{
        py: 10,
        background: "#061622"
          // "linear-gradient(10deg, #53245f 0%, transparent 15%), linear-gradient(350deg, #53245f 0%, transparent 45%), linear-gradient(0deg, transparent, #061622), linear-gradient(150deg, yellow, transparent), linear-gradient(300deg, #012d4e, #063a50)",
      }}
      id="edu"
    >
      <Timeline position={`${small ? "right" : "alternate"}`} ref={edu}>
        <Heading>Education</Heading>
        <SubHeading>
          Purpose of education is to replace an empty mind with an open one
        </SubHeading>
        {educationData.map((edu) => {
          return (
            <TimelineItem key={edu.bgColor}>
              {!small && (
                <TimelineOppositeContent className="text-white">
                  {edu.year}
                </TimelineOppositeContent>
              )}
              {small && <TimelineOppositeContent sx={{ display: "none" }} />}
              <TimelineSeparator>
                <TimelineDot className="bg-darkblue" />
                <TimelineConnector className="bg-darkblue" />
              </TimelineSeparator>
              <TimelineContent>
                {small && (
                  <Typography variant="caption" className="text-white">
                    {edu.year}
                  </Typography>
                )}
                <Fade>
                  <Card
                    sx={{
                      background: `${edu.bgColor}`,
                      mb: 3,
                      mt: 1,
                      display: `${medium ? "block" : "flex"}`,
                      flexDirection: `$educationDatf(edu)%2!==0 ? "row-reverse" : "row"}`,
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={edu.img}
                      sx={{ width: `${medium ? "100%" : "40%"}` }}
                    />
                    <CardContent>
                      <Typography variant="h6" className="text-blue ms">
                        {edu.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        component="div"
                        color="black"
                        sx={{ my: 1 }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {edu.caption}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default EducationComponent;
