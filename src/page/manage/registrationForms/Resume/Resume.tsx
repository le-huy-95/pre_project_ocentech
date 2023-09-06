import React from 'react';
import "./Resume.scss"
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        "& .MuiTableCell-root": {
            border: '1px solid #e6e0df',
        },
    },


});

const Resume = () => {
    const classes = useStyles();

    return (
        <div className='resume-container'>
            <div className='resume-content'>
                <Grid container spacing={2} className='resume-body-header'>
                    <Grid item xs={6} md={6} className='image-user'>
                        <div className='image'>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={6} className='title'>
                        <div className='title-one'>
                            <div> Cộng hòa xã hội chủ nghĩa Việt Nam</div>
                            <div> Độc lập - Tự do - Hạnh phúc</div>
                            <div><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
                            <h2>Sơ yếu lý lịch</h2>
                        </div>
                    </Grid>

                </Grid>
                <div className='resume-body-content'>
                    <div className='user-info'>
                        <h4 className="one">
                            I-Thông tin nhân viên
                        </h4>
                        <div className='two'>
                            <Grid container spacing={7}>
                                <Grid item sm={12} lg={6} className='item'>
                                    <b className='item-title' >Họ và tên : </b>
                                    <span className='item-content'>
                                        .......................................................................
                                        <span className='item-name'>huy</span>
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={6} className='item'>
                                    <b className='item-title' >Giới tính : </b>
                                    <span className='item-content'>
                                        ...........................................................................
                                        <span className='item-name'>Nam</span>
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={6} className='item'>
                                    <b className='item-title' >Email : </b>
                                    <span className='item-content'>
                                        ............................................................................
                                        <span className='item-name'>abc@gmail.com</span>
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={6} className='item'>
                                    <b className='item-title' >Số ĐT : </b>
                                    <span className='item-content'>
                                        .............................................................................
                                        <span className='item-name'>0123456789</span>
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={12} className='item'>
                                    <b className='item-title' >Địa chỉ : </b>
                                    <span className='item-content'>
                                        ..................................................................................
                                        <span className='item-name'>192 tam trinh</span>
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={6} className='item'>
                                    <b className='item-title' >Số căn cước : </b>
                                    <span className='item-content'>
                                        ..............................................
                                        <span className='item-name'>0123456789123</span>
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={6} className='item'>
                                    <b className='item-title' >Ngày cấp : </b>
                                    <span className='item-content'>
                                        ..............................................
                                        <span className='item-name'>22/22/2023</span>
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={12} className='item'>
                                    <b className='item-title' >Nơi cấp : </b>
                                    <span className='item-content'>
                                        .................................................................................
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={6} className='item'>
                                    <b className='item-title' >Dân tộc : </b>
                                    <span className='item-content'>
                                        ..............................................
                                        <span className='item-name'>Kinh</span>
                                    </span>
                                </Grid>
                                <Grid item sm={12} lg={6} className='item'>
                                    <b className='item-title' >Tôn giáo : </b>
                                    <span className='item-content'>
                                        ..............................................
                                        <span className='item-name'>Đạo phật</span>
                                    </span>
                                </Grid>

                            </Grid>

                        </div>
                        <h4 className="three">
                            II-Quan hệ gia đình
                        </h4>
                        <div className="four">
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
                                                style={{ minWidth: "100px", fontSize: '25px' }}
                                                align="center"

                                            >
                                                Số thứ tự
                                            </TableCell>
                                            <TableCell
                                                style={{ minWidth: "100px", fontSize: '25px' }}
                                                align="center"
                                            >
                                                Họ tên người thân
                                            </TableCell>
                                            <TableCell
                                                style={{ minWidth: "80px", fontSize: '25px' }}
                                                align="center"
                                            >
                                                Ngày sinh
                                            </TableCell>
                                            <TableCell
                                                style={{ minWidth: "80px", fontSize: '25px' }}
                                                align="center"
                                            >
                                                Số CCCD
                                            </TableCell>
                                            <TableCell
                                                style={{ minWidth: "70px", fontSize: '25px' }}
                                                align="center"
                                            >
                                                Quan hệ
                                            </TableCell>
                                            <TableCell
                                                style={{ minWidth: "70px", fontSize: '25px' }}
                                                align="center"
                                            >
                                                Địa chỉ chi tiết
                                            </TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <TableRow hover role="checkbox" tabIndex={-1}>

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
                                            <TableCell >
                                                888
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <b className='five'>
                            Tôi xin cam đoan bản khai sơ yếu lý lịch trên đúng dự thật , nếu có điều gì không đúng
                            tôi chịu trách nhiệm trước pháp luật về lời khai của mình
                        </b>
                        <div className='six'>
                            Hà nội , ngày 30 tháng 8 năm 2023
                        </div>
                        <div className='seven'>
                            <div className='signature'>
                                <b>Người khai</b>
                                <div>(Ký và ghi rõ họ trên)</div>
                                <h3>huy lê</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
}

export default Resume