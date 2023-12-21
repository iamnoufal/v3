import Typography from "@mui/material/Typography";

const Heading = ({ children }) => (
  <Typography
    variant="h4"
    component="div"
    className="text-white text-shadow pd"
    textAlign={"center"}
    sx={{ my: 2 }}
  >
    {children}
  </Typography>
);

export default Heading;
