import { styled } from "@mui/system";

export const MainHeading = styled('div')(({ theme }) => ({
    opacity: 0.9,
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: 'normal',
    lineHeight: 1.2,
    fontSize: '1.8rem',
    paddingBottom: theme.spacing(2)
}));

export const SubTitle = styled('div')(({ theme }) => ({
    paddingBottom: theme.spacing(6),
    fontSize: '1rem',
    lineHeight: 1.6,
    fontStyle: 'normal',
    color: theme.palette.secondary.main
}));

export const SectionText = styled('div')(({ theme }) => ({
    color: theme.palette.secondary.main
}));
