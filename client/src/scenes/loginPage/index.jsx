import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from './Form';
const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Box width="100%" backgroundColor={theme.palette.background.alt}>
                <Typography fontWeight = "bold" fontSize = "clamp(1rem, 2rem, 2.25rem)" color = "primary">
                    Trendly
                </Typography>
            </Box>
            <Box width={isNonMobileScreen ? "50%" : "93%"}
            p = "2rem"
            m = "2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}>
                <Typography paddingBottom={"1rem"} fontWeight="500" variant="h5" s={{ mb: "1.5rem" }}>
                    Welcome to Trendly, for the Trend Setters!
                </Typography>
                <Form/>
            </Box>
        </Box>
    )
    ;
}

export default LoginPage;