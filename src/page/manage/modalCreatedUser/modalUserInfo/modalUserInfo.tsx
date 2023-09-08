import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import "../modalCreatedUser.scss"
import Stack from "@mui/material/Stack";
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { IUser } from "../../../../interface/Employee.interface"
import "./modalUserInfo.scss"
import _ from "lodash"

interface IPropCreateUser {
    formDataCreate: Omit<IUser, 'id'>
    setFormDataCreate: any
    Validate: boolean
}
const ModalInfoUser = (props: IPropCreateUser) => {
    const { formDataCreate, setFormDataCreate } = props
    const [previreImage, setPrevireImage] = useState<string>("")

    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];
        setPrevireImage(URL.createObjectURL(file))
        setFormDataCreate({ ...formDataCreate, image: event.target.files[0] })
    }



    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={19} className='gird-all' >
                    <Grid item lg={6} sm={19} >
                        <div className='left'>
                            <div className='icon-content'>

                                {previreImage ?
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={previreImage}
                                        sx={{ width: 300, height: 300, marginBottom: "20px" }}
                                    />
                                    : <AccountCircleIcon />}

                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <label htmlFor="upload-image">
                                        <Button variant="contained" component="span">
                                            Upload
                                        </Button>
                                        <input
                                            id="upload-image"
                                            hidden
                                            accept="image/*"
                                            type="file"
                                            onChange={handleFileUpload}
                                        />
                                    </label>

                                </Stack>
                            </div>
                        </div>


                    </Grid>
                    <Grid item lg={13} sm={19} style={{ width: "860px" }} >
                        <Grid container item spacing={2}>
                            <Grid item xs={6}>

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Họ và tên"
                                    // defaultValue="Hello World"
                                    fullWidth
                                    value={formDataCreate.name}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, name: event.target.value })}
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Mã nhân viên"
                                    // defaultValue="Hello World"
                                    fullWidth
                                    value={formDataCreate.code}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, code: event.target.value })}
                                    size='small'

                                />
                            </Grid>

                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="email"
                                    fullWidth
                                    value={formDataCreate.email}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, email: event.target.value })}
                                    size='small'

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Số điện thoại"
                                    fullWidth
                                    value={formDataCreate.phone}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, phone: event.target.value })}
                                    size='small'

                                />
                            </Grid>


                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Địa chỉ cụ thể"
                                    fullWidth
                                    value={formDataCreate.address}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, address: event.target.value })}
                                    size='small'

                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container item spacing={2} >
                            <Grid item sm={4} >
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="chọn giới tính"
                                    fullWidth
                                    value={formDataCreate.gender}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, gender: event.target.value })}
                                    size='small'

                                >
                                    <MenuItem value={1} >
                                        Nam
                                    </MenuItem>
                                    <MenuItem value={2} >
                                        Nữ
                                    </MenuItem>
                                    <MenuItem value={3} >
                                        Khác
                                    </MenuItem>
                                </TextField>

                            </Grid>

                            <Grid item xs={4} >
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="chọn Nhóm"
                                    fullWidth
                                    value={formDataCreate.team}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, team: event.target.value })}
                                    size='small'

                                >
                                    <MenuItem value={1} >
                                        Reactjs
                                    </MenuItem>
                                    <MenuItem value={2} >
                                        Java
                                    </MenuItem>
                                    <MenuItem value={3} >
                                        Mobile
                                    </MenuItem>
                                </TextField>

                            </Grid>
                            <Grid item xs={4} className='date'>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Ngày sinh"
                                    fullWidth
                                    type='date'
                                    value={formDataCreate.dateOfBirth}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, dateOfBirth: event.target.value })}
                                    size='small'

                                />
                            </Grid>


                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Số căn cước công dân"
                                        fullWidth
                                        value={formDataCreate.citizenIdentificationNumber}
                                        onChange={(event) => setFormDataCreate({ ...formDataCreate, citizenIdentificationNumber: event.target.value })}
                                        size='small'

                                    />

                                </Grid>
                            </Grid>
                            <Grid item xs={4} >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Ngày cấp"
                                    fullWidth
                                    type='date'
                                    value={formDataCreate.dateOfIssuanceCard}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, dateOfIssuanceCard: event.target.value })}
                                    size='small'

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nơi cấp"
                                    fullWidth
                                    value={formDataCreate.placeOfIssueCard}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, placeOfIssueCard: event.target.value })}
                                    size='small'

                                />
                            </Grid>

                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Dân tộc"
                                    fullWidth
                                    value={formDataCreate.ethnic}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, ethnic: event.target.value })}
                                    size='small'

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Tôn giáo"
                                    fullWidth
                                    value={formDataCreate.religion}
                                    onChange={(event) => setFormDataCreate({ ...formDataCreate, religion: event.target.value })}
                                    size='small'

                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
}

export default ModalInfoUser