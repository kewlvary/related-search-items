import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Chip from '@mui/material/Chip';

// const rows = [
//     { id: 1, toggle: false, searchTerm: 'airpods max', searchVolume: '450K', difficulty: 'Hard' },
//     { id: 2, toggle: false, searchTerm: 'beats headphones', searchVolume: '368K', difficulty: 'Medium' },
//     { id: 3, toggle: false, searchTerm: 'bluetooth headphones', searchVolume: '215K', difficulty: 'Very Hard' },
//     { id: 4, toggle: false, searchTerm: 'apple headphones', searchVolume: '384K', difficulty: 'Easy' },
//     { id: 5, toggle: false, searchTerm: 'sony headphones', searchVolume: '509K', difficulty: 'Possible' },
// ];

const fetchColour = {
    Possible: 'warning',
    Easy: 'success',
    Medium: 'warning',
    Hard: 'warning',
    'Very Hard': 'error',
}

export default function Data({ rows, setRows }) {
    const SwitchComp = ({ params, setRows }) => {
        const handleChange = (checked) => {
            const r = [...rows];
            const row = r.filter(t => t.id === params.row.id)[0];
            row.toggle = checked;
            setRows(r);
        };
        return (
            <Switch
                checked={params.value}
                onChange={({ target }) => handleChange(target.checked)}
            />
        );
    }
    const columns = [
        {
            field: 'toggle',
            description: 'Toggle',
            headerName: 'Toggle',
            flex: 1,
            editable: false,
            sortable: false,
            hideable: false,
            renderCell: params => (<SwitchComp params={params} setRows={setRows} />)
        },
        {
            field: 'searchTerm',
            description: 'Search Term',
            headerName: 'Search Term',
            flex: 1,
            editable: false,
        },
        {
            field: 'searchVolume',
            description: 'Search Volume',
            headerName: 'Search Volume',
            flex: 1,
            editable: false,
        },
        {
            field: 'difficulty',
            description: 'Keyword Difficulty',
            headerName: 'Keyword Difficulty',
            flex: 1,
            editable: false,
            renderCell: params => (
                <Chip
                    label={params.value}
                    color={fetchColour[params.value]}
                    variant="outlined"
                />
            )
        },
    ];

    return (
        <Box
            sx={{
                height: 400,
                width: '80%',
            }}
        >
            <Box
                sx={{ mb: 5 }}
            >
                Related Search Terms
            </Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Note
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ fontSize: 20 }}>
                        <Box sx={{ fontWeight: 'bold', mb: 1 }}>Choosing related search items</Box>
                        <Box>We suggest terms related to the primary content topic, prioritizing them based on their relevance to the top ranking pages.</Box>
                        <hr />
                        <Box sx={{ fontWeight: 'bold', mb: 1 }}>How this information is used</Box>
                        <Box>The selected related search terms are included with their corresponding search volume in the content brief.</Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                slots={{
                    toolbar: GridToolbar,
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                sx={{
                    boxShadow: 2,
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 600
                    },
                }}
            />
        </Box>
    );
}