export interface IEmployeeFamilyDtos {
  id: number;
  name: string;
  gender: number;
  dateOfBirth: number;
  relationShip: number;
  citizenIdentificationNumber: string;
  address: string;
  email: string;
  employeeId: number;
  phoneNumber: string;
}

export interface ICertificatesDto {
  id: number;
  certificateName: string;
  issueDate: number;
  content: string;
  field: string;
  employeeId: number;
}

export interface IEployeeRes {
  code: number;
  message: string;
  data: {
    id: number;
    name: string;
    code: string;
    gender: number;
    dateOfBirth: number;
    address: string;
    team: number;
    email: string;
    image: string;
    phone: string;
    citizenIdentificationNumber: string;
    dateOfIssuanceCard: number;
    placeOfIssueCard: string;
    submitDay: number;
    leaderName: string;
    leaderPosition: number;
    submitContent: string;
    knowledge: null;
    activity: string;
    skill: string;
    submitProfileStatus: string;
    currentPosition: number;
    employeeFamilyDtos: null;
    certificatesDto: null;
    ethnic: string;
    religion: string;
    appointmentDate: number;
    additionalRequest: null;
    rejectionDate: null;
    reasonForRejection: null;
    additionalRequestTermination: null;
    terminationAppointmentDate: null;
    refuseEndProfileDay: null;
    reasonForRefuseEndProfile: null;
    endDay: number;
    reasonForEnding: string;
    numberSaved: null;
    decisionDay: null;
    leaderId: number;
  }[];
  totalElements: number;
}

export interface IEmployeeApiResByID {
  code: number;
  message: string;
  data: {
    id: number;
    name: string;
    code: string;
    gender: number;
    dateOfBirth: number;
    address: string;
    team: number;
    email: string;
    image: string;
    phone: string;
    citizenIdentificationNumber: string;
    dateOfIssuanceCard: number;
    placeOfIssueCard: string;
    submitDay: number;
    leaderName: string;
    leaderPosition: number;
    submitContent: string;
    knowledge: null;
    activity: string;
    skill: string;
    submitProfileStatus: string;
    currentPosition: null;
    employeeFamilyDtos: IEmployeeFamilyDtos[];
    certificatesDto: ICertificatesDto[];
    ethnic: string;
    religion: string;
    appointmentDate: null;
    additionalRequest: null;
    rejectionDate: null;
    reasonForRejection: string;
    additionalRequestTermination: null;
    terminationAppointmentDate: null;
    refuseEndProfileDay: null;
    reasonForRefuseEndProfile: null;
    endDay: null;
    reasonForEnding: null;
    numberSaved: null;
    decisionDay: null;
    leaderId: number;
  };
}

export interface IUser {
  id: number;
  name: string;
  code: string;
  gender: number;
  dateOfBirth: number;
  address: string;
  team: number;
  email: string;
  image: string;
  phone: string;
  ethnic: string;
  religion: string;
  dateOfIssuanceCard: string;
  placeOfIssueCard: string;
  citizenIdentificationNumber: string;
  certificatesDto: [];
  employeeFamilyDtos: []
}
