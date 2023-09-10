import Button from '@mui/material/Button';
import { useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import "./modalCreatedUser.scss"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModalInfoUser from "./modalUserInfo/modalUserInfo"
import ModalDegreeInfo from "./modalDegreenInfo/modalDegreeInfo "
import ModalRelativeInfo from "./modalRelativeInfo/modalRelativeInfo"
import RegistrationForms from "../registrationForms/registrationForms"
import { IUser, IResponse } from "../../../interface/Employee.interface"
import { useCreateEmployeeMutation, useUpdateEmployeeMutation } from "../../../redux/slice/Employee"
import { toast } from 'react-toastify';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}




function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index: number) {

    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}




export interface Iprop {
    open: boolean,
    setOpen: any
    action: string
    setAction: any
    DataUpdate: any
}


const initState: Omit<IUser, 'id'> = {
    name: "",
    code: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    team: "",
    email: "",
    image: "",
    phone: "",
    ethnic: "",
    religion: "",
    dateOfIssuanceCard: "",
    placeOfIssueCard: "",
    citizenIdentificationNumber: "",
    employeeFamilyDtos: [],
    certificatesDto: [],

}

// const initValdate: {
//     name: boolean;
//     code: boolean;
//     gender: boolean;
//     dateOfBirth: boolean;
//     address: boolean;
//     team: boolean;
//     email: boolean;
//     image: boolean;
//     phone: boolean;
//     ethnic: boolean;
//     religion: boolean;
//     dateOfIssuanceCard: boolean;
//     placeOfIssueCard: boolean;
//     citizenIdentificationNumber: boolean;
// } = {
//     name: true,
//     code: true,
//     gender: true,
//     dateOfBirth: true,
//     address: true,
//     team: true,
//     email: true,
//     image: true,
//     phone: true,
//     ethnic: true,
//     religion: true,
//     dateOfIssuanceCard: true,
//     placeOfIssueCard: true,
//     citizenIdentificationNumber: true,
// }




const ModalCreatedUser = (props: Iprop) => {
    const [formDataCreate, setFormDataCreate] = useState(initState)
    const { open, setOpen, setAction, action, DataUpdate } = props
    const [id, setId] = useState(0);
    const [value, setValue] = useState(0);
    const [previreImage, setPrevireImage] = useState<string>("")
    const [openRegistration, setOpenRegistration] = useState(false);
    const [CreateData, CreateDataResult] = useCreateEmployeeMutation()
    const [UpdateData] = useUpdateEmployeeMutation()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleCreateUser = async () => {
        let result = await CreateData(formDataCreate).unwrap()
        if (result.code === 200) {
            console.log("CreateDataResult", CreateDataResult)
            setId(result.data.id)
            toast.success("Bạn đã thêm nhân viên mới thành công")
        }
    }


    const handleUpdateUser = async () => {
        await UpdateData(formDataCreate).unwrap()
    }



    const handleClose = () => {
        setOpen(false);
        setAction("")
        setPrevireImage("")
    };

    const handleShowhideRegistrationFrom = () => {
        setOpenRegistration(!openRegistration)
    }

    useEffect(() => {
        if (action === "Create") {
            setFormDataCreate(initState)
        }
        if (action === "Update") {
            setFormDataCreate({ ...DataUpdate })
            console.log("DataUpdate", DataUpdate)
        }
    }, [action])


    return (
        <div >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                className='modal-create-container'
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {action === "Create" ? "Tạo mới nhân viên" : "Chỉnh sửa nhân viên"}
                </DialogTitle>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Thông tin nhân viên" {...a11yProps(0)} />

                            <Tab label="Thông tin văn bằng" {...a11yProps(1)} />
                            <Tab label="Quan hệ gia đình" {...a11yProps(2)} />

                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <ModalInfoUser
                            previreImage={previreImage}
                            setPrevireImage={setPrevireImage}
                            formDataCreate={formDataCreate}
                            setFormDataCreate={setFormDataCreate}
                            action={action}
                            imageUpdate={DataUpdate.image}
                        />
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1} >
                        <ModalDegreeInfo
                            id={id}
                        />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <ModalRelativeInfo />
                    </CustomTabPanel>

                </Box>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon className='icon-exit' />
                </IconButton>


                <DialogActions>
                    {action === "Create" ?
                        <Button variant="contained" disableElevation onClick={() => handleCreateUser()} style={{
                            backgroundColor: "#7467ef"
                        }} >
                            Lưu
                        </Button>
                        :
                        <Button variant="contained" disableElevation onClick={() => handleUpdateUser()} style={{
                            backgroundColor: "#7467ef",
                        }} >
                            Cập nhật
                        </Button>

                    }

                    <Button onClick={() => handleShowhideRegistrationFrom()} variant="contained" disableElevation>
                        Đăng ký
                    </Button>
                    <Button onClick={handleClose} variant="contained" disableElevation style={{
                        backgroundColor: "orange",

                    }}>
                        Thoát
                    </Button>
                </DialogActions>
                <RegistrationForms
                    open={openRegistration}
                    setOpen={setOpenRegistration}
                />
            </Dialog>

        </div>
    );
}

export default ModalCreatedUser