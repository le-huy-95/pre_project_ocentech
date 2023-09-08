import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import "./loading.scss"


export default function CircularUnderLoad() {
    return <CircularProgress disableShrink className='btn-skeleton' />;
}
