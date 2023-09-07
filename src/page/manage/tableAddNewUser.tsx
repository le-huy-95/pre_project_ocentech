import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import "./manage.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ModalCreatedUser from "./modalCreatedUser/modalCreatedUser";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RegistrationForms from "./registrationForms/registrationForms";
import DeleteUser from "./modalDeleteUser/modalDeleteUser";
import {
  useGetCurrentRoleEmployeeQuery,
  useGetEmployeHappeningQuery,
  useSearchEmployeeQuery,
} from "../../redux/slice/Employee";
interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "1px solid #e6e0df",
    },
  },
});

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [createData("India", "IN", 1324171354, 3287263)];

const TableAddNewUser = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [action, setAction] = useState<string>("");
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);

  const handleShowhideDeleteFrom = () => {
    setOpenDeleteUser(!openDeleteUser);
  };

  const handleShowhideRegistrationFrom = () => {
    setOpenRegistration(!openRegistration);
  };

  const handleShowhideModalCreatedUser = () => {
    setOpenModalCreate(!openModalCreate);
    setAction("Create");
  };

  const handleShowhideModalUpdateUser = () => {
    setOpenModalCreate(!openModalCreate);
    setAction("Update");
  };

  const classes = useStyles();
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit">
      <div className="icon-tabs">
        <HomeIcon />
      </div>
    </Link>,
    <Typography key="3" color="text.primary">
      Thêm mới nhân viên
    </Typography>,
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { data: employeeDataRes, isLoading } = useGetEmployeHappeningQuery(1);
  console.log(employeeDataRes, isLoading);
  // const { data: employeeData } = useGetCurrentRoleEmployeeQuery();
  // console.log(employeeData);
  const { data } = useSearchEmployeeQuery("3,6,8,9", "hu");
  console.log(data);
  return (
    <div>
      <div className="Breadcrumbs">
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <div className="title">
        <div className="name-title">Thêm mới nhân viên</div>
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search infomation" />
        </div>
      </div>
      <div className="btn-add-new">
        <Button
          variant="contained"
          size="medium"
          sx={{ background: "#7467ef" }}
          onClick={() => handleShowhideModalCreatedUser()}
        >
          <PersonAddAltIcon /> <span>Thêm mới</span>
        </Button>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 500 }} className="table-all">
          <Table
            stickyHeader
            aria-label="sticky table"
            className={classes.table}
          >
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    color: "#fff",
                    backgroundColor: "#7467ef",
                  },
                }}
              >
                <TableCell style={{ minWidth: "100px" }} align="center">
                  Họ và tên
                </TableCell>
                <TableCell style={{ minWidth: "100px" }} align="center">
                  Giới tính
                </TableCell>
                <TableCell style={{ minWidth: "80px" }} align="center">
                  Email
                </TableCell>
                <TableCell style={{ minWidth: "80px" }} align="center">
                  Số điện thoại
                </TableCell>
                <TableCell style={{ minWidth: "70px" }} align="center">
                  Ngày sinh
                </TableCell>
                <TableCell style={{ minWidth: "70px" }} align="center">
                  Nhóm
                </TableCell>
                <TableCell style={{ minWidth: "100px" }} align="center">
                  Trạng thái
                </TableCell>
                <TableCell style={{ minWidth: "100px" }} align="center">
                  Thao tác
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>2222</TableCell>

                <TableCell>567</TableCell>
                <TableCell>888</TableCell>
                <TableCell>888</TableCell>
                <TableCell>888</TableCell>
                <TableCell>888</TableCell>
                <TableCell>888</TableCell>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span onClick={() => handleShowhideModalUpdateUser()}>
                    <EditIcon
                      style={{
                        color: "green",
                        cursor: "pointer",
                        fontSize: "30px",
                      }}
                    />
                  </span>
                  <span onClick={() => handleShowhideDeleteFrom()}>
                    <DeleteIcon
                      style={{
                        color: "red",
                        cursor: "pointer",
                        margin: "0 30px",
                        fontSize: "30px",
                      }}
                    />
                  </span>
                  <span onClick={() => handleShowhideRegistrationFrom()}>
                    <VisibilityIcon
                      style={{
                        color: "gray",
                        cursor: "pointer",
                        fontSize: "30px",
                      }}
                    />
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <ModalCreatedUser
        open={openModalCreate}
        setOpen={setOpenModalCreate}
        action={action}
        setAction={setAction}
      />
      <RegistrationForms
        open={openRegistration}
        setOpen={setOpenRegistration}
      />
      <DeleteUser open={openDeleteUser} setOpen={setOpenDeleteUser} />
    </div>
  );
};

export default TableAddNewUser;
