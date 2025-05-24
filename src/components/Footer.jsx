import { Stack } from "@mui/material";

import LinkedinIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    return (
        <footer>
            <p>Created with React.js by{" "}
                <a href="https://github.com/mymehrnaz/" target="_blank" rel="noopener noreferrer">
                    Mehrnaz Sadeghian
                </a>
            </p>
            <Stack direction="row" spacing={2} sx={{ p: "20px 6px 0", justifyContent: "center" }}>
                <a href="https://github.com/mymehrnaz/my-app-aks/tree/main" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
                <a href="mailto:mehrnazsadeghian8968@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EmailIcon />
                </a>
                <a href="https://www.linkedin.com/in/mehrnaz-sadeghian-34034b321" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                </a>
            </Stack>
        </footer>
    )
}

export default Footer