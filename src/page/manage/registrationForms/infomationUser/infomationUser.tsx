import React from 'react';
import "./infomationUser.scss"
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import WcIcon from '@mui/icons-material/Wc';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from '@mui/material/Button';

const InfomationUser = () => {


    return (
        <div className='InfomationUser-container'>
            <div className='content'>
                <div className="left-cv">
                    <div className='left-content'>
                        <div className='first-left-content'>
                            <div className='avatar-user'>
                            </div>
                            <div className='email'>
                                <span><MarkunreadIcon style={{
                                    color: "#7467ef",
                                    fontSize: "30px"
                                }} /></span>
                                <span>khakha000@gmail.com</span>
                            </div>
                            <div className='phone'>
                                <span ><LocalPhoneIcon style={{
                                    color: "#7467ef",
                                    fontSize: "30px"
                                }} /></span>
                                <span>0123456789</span>
                            </div>
                        </div>
                        <div className="second-left-content">
                            <h3 className='second-content-title'>
                                Kỹ năng ngoại ngữ
                            </h3>
                            <div className='second-content-body'>
                                <div className='language'>
                                    <div className='rating'>
                                        <div>Tiếng Anh</div>
                                        <div >
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </div>

                                    </div>
                                    <div className='rating'>
                                        <div>Tiếng Hoa</div>
                                        <div >
                                            <Rating name="half-rating-read" defaultValue={7.5} precision={0.5} readOnly />
                                        </div>

                                    </div>
                                    <div className='rating'>
                                        <div>Tiếng Nhật</div>
                                        <div >
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="three-left-content">
                            <h3 className='three-content-title'>
                                Kỹ năng tin học vp
                            </h3>
                            <div className='three-content-body'>
                                <div className='skill-computer'>
                                    <div className='rating'>
                                        <div>Word</div>
                                        <div >
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </div>
                                    </div>
                                    <div className='rating'>
                                        <div>Excel</div>
                                        <div >
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='four-content-body'>
                                <h3 className='four-content-title'>
                                    Kỹ năng sở trường
                                </h3>
                                <TextField
                                    placeholder="Nhập Kỹ năng của bạn"
                                    multiline
                                    rows={5}
                                    maxRows={5}
                                    className='text-input'
                                />
                            </div>
                            <div className='five-content-body'>
                                <h3 className='four-content-title'>
                                    Hoạt động tiêu biểu
                                </h3>
                                <TextField
                                    placeholder="Nhập hoạt động của bạn"
                                    multiline
                                    rows={5}
                                    maxRows={5}
                                    className='text-input'

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='center-cv'>
                    <div className='first-line'>
                    </div>
                    <div className='second-line'>
                        <div>
                            <WcIcon
                                style={{ color: 'white' }}
                            />
                        </div>
                        <div>
                            <CalendarMonthIcon />
                        </div>

                        <div>
                            <LocationOnIcon />
                        </div>

                    </div>
                    <div className='three-line'>
                    </div>
                    <div className='four-line'>
                    </div>
                </div>
                <div className="right-cv">
                    <div className='firt-right-content'>
                        <div>Nguyễn Hoàng Vân Long</div>
                        <div>React js</div>

                    </div>
                    <div className='second-right-content'>
                        <div>Nam</div>
                        <div> 26-06-1000</div>
                        <div className='address'> hà nội , hoàng mai , hà nội</div>
                    </div>
                    <div className='three-right-content'>
                        <div className='puspose'> Mục tiêu công việc</div>
                        <div className='content-detail'>
                            <div>dsfdsfdfsfsdsdsfsd</div>
                        </div>
                    </div>
                    <div className='four-right-content'>
                        <div className='experience'>Kinh nghiệm làm việc <div><AddCircleIcon style={{ color: 'gray' }} /></div></div>
                        <div className='experience-detail'>
                            <div className='experience-detail-form'>
                                <div className='timeAndNameCompany'>
                                    <b className='time'>30/9/2022 - 1/12/2022</b>
                                    <b ><FiberManualRecordIcon style={{ color: 'black' }} /></b>
                                    <b className='NameCopany'> công ty itsolf</b>
                                </div>
                                <b className='address-company'>
                                    Dịch vọng hậu , cầu giấy
                                </b>
                                <div className='experience-detail'>
                                    Làm việc theo chỉ đạo của cấp trên giao cho
                                </div>
                            </div>
                            <div className='btn-optional'>

                                <div className='edit'>

                                    <Button variant="contained" disableElevation style={{
                                        marginLeft: "20px", marginRight: "20px"
                                    }}>
                                        <CreateIcon />
                                    </Button>
                                </div>

                                <div className='delete'>
                                    <Button variant="contained" disableElevation style={{
                                        backgroundColor: "orange",

                                    }}>
                                        <DeleteIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    );
}

export default InfomationUser