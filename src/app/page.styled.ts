import { styled } from "@mui/system";
export const MainHeading = styled('div')(({ theme }) => ({
    color: theme.palette.primary.dark,
    opacity: 0.9,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "bold",
    lineHeight: 1.2,
    fontSize: '2.75rem'
  }));
  
export const SubHeading = styled("div")({
    color: "#ffffff",
    opacity: 1,
    fontSize: '1.8rem',
    fontWeight: 300,
    lineHeight: 1.3,
    fontFamily: "'Montserrat', sans-serif",
  });
  
export const StyledButton = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2rem',
    "& button": {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.light,
      color: theme.palette.primary.light,
      margin: '.4rem .8rem',
      padding: '.5rem 2rem',
      fontWeight: 400,
      textTransform: 'capitalize',
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.light,
        color: theme.palette.primary.light,
      },
    }
  }));