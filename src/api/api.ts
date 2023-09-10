import http from "../config/http";

export const getFamilyByEmployeeId = (id) => {
  return http(`/employee-family?employeeId=${id}`);
};

export const getAccount = async () => {
  return await http("/employee/current-role");
};

export const postExp = (id, data) => {
  return http.post(`/experience?employeeId=${id}`, data);
};
export const deleteExp = (id) => {
  return http.delete(`/experience/${id}`);
};
export const updateExp = (id, data) => {
  return http.put(`/experience/${id}`, data);
};
export const getExp = (id) => {
  return http(`/experience?employeeId=${id}`);
};

export const SignIn = async (user: {
  username: string;
  password: string;
}) => {
  const response = await http.post(
    "/oauth/token",
    {
      clinet_id: "core_client",
      grant_type: "password",
      client_secret: "secret",
      username: user.username,
      password: user.password,
    },
    {
      headers: {
        Authorization: "Basic Y29yZV9jbGllbnQ6c2VjcmV0",
      },
    }
  );
  return response.data;
};

export const getSalaryByEmp = async (id) => {
  return await http.get(`/salary-increase?employeeId=${id}`);
};
//thêm tăng lương
export const addSalaryByEmp = async (id, data) => {
  return await http.post(`/salary-increase?employeeId=${id}`, data);
};
export const updateSalary = async (data) => {
  return await http.put(`/salary-increase/${data.id}`, data);
};
export const deleteSalary = async (id) => {
  return await http.delete(`/salary-increase/${id}`);
};
export const uploadImage = async (FromData) => {
  return await http.post("/employee/upload-image", FromData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};




//proposal

// export const getProposalByEmp = async (id) => {
//   return await http.get(`/proposal?employeeId=${id}`)
// }

// export const addProposalByEmp = async (id, data) => {
//   return await http.post(`/proposal?employeeId=${id}&page=1&size=20`, data)
// }

//leader

//SUBMISSION OF DOCUMENTS

export const submitAndSaveResume = async (data) => {
  return await http.put(`/employee/${data.id}`, data);
};

//leader

export const getSalaryIncreaseByCurrentLeader = async () => {
  return await http.get("/salary-increase/current-leader");
};

export const getByEmpIdSalary = async (id) => {
  return await http.get(`/salary-increase?employeeId=${id}`);
};

export const getProcess = async () => {
  return await http.get("/process/current-leader");
};

export const getByEmpIdProcess = async (id) => {
  return await http.get(`/process?employeeId=${id}`);
};

export const salaryApprove = async (data) => {
  return await http.put(`/salary-increase/${data.id}`, data);
};
export const getProposal = async () => {
  return await http.get("/proposal/current-leader");
};
export const getByEmpIdProposal = async (id) => {
  return await http.get(`/proposal?employeeId=${id}`);
};

export const acceptPromote = async (data) => {
  return await http.put(`/process/${data.id}`, data);
};

export const rejectPromote = async (data) => {
  return await http.put(`/process/${data.id}`, data);
};

export const proposalEdit = async (data) => {
  return await http.put(`/proposal/${data.id}`, data);
};
export const acceptEmployee = async (data) => {
  return await http.put(`/employee/${data.id}`, data);
};
