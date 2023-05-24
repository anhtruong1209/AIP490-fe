import { Box } from '@mui/material'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        >
        <Box p={3}>{children}</Box>
    </div>
    );
}

export default TabPanel