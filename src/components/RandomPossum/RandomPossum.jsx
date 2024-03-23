import React from "react";
import DefaultCard from '../DefaultCard/DefaultCard';
import { Button, Box }  from '@mui/material';
import axios from 'axios';

export default function RandomPossum (){
    const [possum, setPossum] = React.useState(null);

    const getPossum = () => {
        axios.get("https://api.tinyfox.dev/img?animal=poss", { responseType: "blob" })
        .then((response) => {
            const srcForImage = URL.createObjectURL(response.data)
            setPossum(srcForImage);
        })
        .catch((err) => console.error(err));
    };

    return(
        <DefaultCard>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                <img style={{maxHeight: 200, margin: 10,}} src={possum} alt=""/>
                <Button sx={{boxShadow: 5}} onClick={getPossum}>Get New Possum</Button>    
            </Box>
        </DefaultCard>
    );
}