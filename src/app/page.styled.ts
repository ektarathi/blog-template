import { styled } from "@mui/system";

export const StyledWrapper = styled("div")(({}) => ({
  backgroundImage:
    'url("https://mobirise.com/extensions/businessm4/travel-agency/assets/images/artiom-vallat-558027-unsplash-1519757244-94.181.200.62-1920x1280.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
}));

export const MainHeading = styled("div")(({ theme }) => ({
  color: theme.palette.primary.dark,
  opacity: 0.9,
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: "bold",
  lineHeight: 1.2,
  fontSize: "2.75rem",
}));

export const SubHeading = styled("div")({
  color: "#ffffff",
  opacity: 1,
  fontSize: "1.8rem",
  fontWeight: 300,
  lineHeight: 1.5,
  fontFamily: "'Montserrat', sans-serif",
  textAlign: "center"
});

export const OutlinedButton = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  border: "2px solid",
  margin: ".4rem .8rem",
  padding: ".5rem 2rem",
  fontWeight: 400,
  textTransform: "capitalize",
  borderRadius: '5px'
}));

export const ColouredButton = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderColor: theme.palette.primary.light,
  color: theme.palette.primary.light,
  margin: ".4rem .8rem",
  padding: ".6rem 2rem",
  fontWeight: 400,
  textTransform: "capitalize",
  borderRadius: '5px'
}));

export const StyledButton = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "2rem",
}));
