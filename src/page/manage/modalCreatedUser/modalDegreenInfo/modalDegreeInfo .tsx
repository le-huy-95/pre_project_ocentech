import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import "./modalDegreeInfo .scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { ICertificate } from "../../../../interface/Certificate.interface"
import { useCreateCertificateMutation } from "../../../../redux/slice/Certificate/index"
import { toast } from 'react-toastify';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
        "& .MuiTableCell-root": {
            border: '1px solid #e6e0df',
        },
    },


});


const initialSate: Omit<ICertificate, 'id' | 'employeeId'> = {
    certificateName: "",
    issueDate: "",
    content: "",
    field: ""
}

interface ICertificateProps {
    id: number
}

const ModalDegreeInfo = (props: ICertificateProps) => {
    const { id } = props
    const [idUser, setIduser] = useState<number>(0)

    const classes = useStyles();
    const [createCertificateData, setCreateCertificateData] = useState(initialSate)
    const [CreateCertificate] = useCreateCertificateMutation()


    useEffect(() => {
        setIduser(id)
    }, [id])

    const handleCreateCertificate = async () => {
        if (idUser == 0) {
            toast.info("Vui lòng tạo thông tin nhân viên trước khi qua tạo thông tin văn bằng")
        }
        await CreateCertificate({
            employeeId: idUser,
            data: [createCertificateData]
        }).unwrap()
    }
    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>

                <Grid item lg={20} sm={20} style={{ width: "950px" }} >
                    <Grid container item spacing={1}>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Tên văn bằng"
                                // defaultValue="Hello World"
                                fullWidth
                                size='small'
                                value={createCertificateData.certificateName}
                                onChange={(event) => setCreateCertificateData({ ...createCertificateData, certificateName: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Xếp loại"
                                // defaultValue="Hello World"
                                fullWidth
                                size='small'
                                value={createCertificateData.field}
                                onChange={(event) => setCreateCertificateData({ ...createCertificateData, field: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Chọn ngày cấp"
                                fullWidth
                                type='date'
                                size='small'
                                value={createCertificateData.issueDate}
                                onChange={(event) => setCreateCertificateData({ ...createCertificateData, issueDate: event.target.value })}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nội dung văn bằng"
                                // defaultValue="Hello World"
                                fullWidth
                                size='small'
                                value={createCertificateData.content}
                                onChange={(event) => setCreateCertificateData({ ...createCertificateData, content: event.target.value })}
                            />
                        </Grid>

                    </Grid>


                </Grid>
                <div className='btn-save'>
                    <Button variant="contained" disableElevation style={{
                        backgroundColor: "#7467ef",
                    }}
                        onClick={() => handleCreateCertificate()}
                    >
                        Lưu
                    </Button>
                    <Button variant="contained" disableElevation style={{
                        backgroundColor: "orange",

                    }}>
                        Thoát
                    </Button>
                </div>
                <Grid item lg={19} sm={19} style={{ width: "950px" }} >
                    <Grid container item spacing={0}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table" className={classes.table}>
                                <TableHead>
                                    <TableRow sx={{
                                        "& th": {
                                            color: "#fff",
                                            backgroundColor: "#7467ef",
                                        }
                                    }}>
                                        <TableCell
                                            style={{ minWidth: "100px" }}
                                            align="center"

                                        >
                                            Số thứ tự
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "100px" }}
                                            align="center"
                                        >
                                            Tên văn bằng
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "80px" }}
                                            align="center"
                                        >
                                            Ngày cấp
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "80px" }}
                                            align="center"
                                        >
                                            Nội dung văn bằng
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "70px" }}
                                            align="center"
                                        >
                                            Thao tác
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow hover role="checkbox" tabIndex={-1} >

                                        <TableCell >
                                            456
                                        </TableCell>

                                        <TableCell >
                                            567
                                        </TableCell>
                                        <TableCell >
                                            888
                                        </TableCell>
                                        <TableCell >
                                            888
                                        </TableCell>
                                        <TableCell >
                                            888
                                        </TableCell>

                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>

                </Grid>
            </Box>
        </div >
    );
}

export default ModalDegreeInfo