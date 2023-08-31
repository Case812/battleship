import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { ShipItemParams } from "../../../interfaces/interfaces";
import "./ShipItem.css";

export default function ShipItem(params: { shipItem: ShipItemParams }) {
    return (<>
        <ListItem sx={{ gap: '1rem' }}>
            <Box
                sx={{ width: '7rem', overflow: 'hidden' }}>
                <img src={params.shipItem.imageSrc}></img>
            </Box>
            <ListItemText>{params.shipItem.text}</ListItemText>
            <div className="hits-row">
                {getHits(params.shipItem.numberOfHits)}
            </div>
        </ListItem>

    </>)
}

function getHits(count: number) {
    const hits = [];
    for (let i = 0; i < count; i++) {
        hits.push((<Box key={i} sx={{ width: '1.2rem', overflow: 'hidden' }}>
            <img src={'/Hit.png'}></img>
        </Box>
        ))
    }
    return (<>{hits}</>);
}