import Typography from "@mui/material/Typography";

const SubHeading = ({ children }) => (
  <Typography
    variant="h5"
    component="div"
    className="text-white text-shadow sil"
    textAlign={"center"}
    sx={{ mb: 2, wordSpacing: "5px", letterSpacing: "1px" }}
    fontStyle="italic"
  >
    {children}
  </Typography>
);

export default SubHeading;
