import { styled } from "@mui/system";

export const StyledWrapper = styled("div")(({ theme }) => ({
   marginTop: theme.spacing(8),
   marginBottom: theme.spacing(8)
 }));

export const SectionContent = styled("div")(({ theme }) => ({
   display: "flex",
   flexDirection: "column"
}));

export const SubHeading = styled("div")(({ theme }) => ({
   paddingTop: theme.spacing(2)
}));

export const MainHeading = styled("div")(({ theme }) => ({
   fontFamily: "'Montserrat', sans-serif",
    fontSize: "1.8rem",
    lineHeight: 1.2
}));