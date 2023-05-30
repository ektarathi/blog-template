import { styled } from "@mui/system";

export const StyledWrapper = styled("div")(({ theme }) => ({
    backgroundColor: "#f4f8fa",
    paddingTop: 40,
    paddingBottom: 40
  }));

  export const LeftContent = styled("div")(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.greenGradient.light}, ${theme.palette.greenGradient.main})`,
    marginLeft: 10,
    padding: 20,
    color: 'white',
    borderRadius: 10
  }));

  export const MiddleContent = styled("div")(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.blueGradient.light}, ${theme.palette.blueGradient.main})`,
    marginLeft: 10,
    padding: 20,
    color: 'white',
    borderRadius: 10
  }));

  export const RightContent = styled("div")(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.redGradient.main}, ${theme.palette.redGradient.light})`,
    marginLeft: 10,
    padding: 20,
    color: 'white',
    borderRadius: 10
  }));