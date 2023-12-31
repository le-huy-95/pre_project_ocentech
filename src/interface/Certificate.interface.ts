export interface ICertificate {
  id: number;
  certificateName: string;
  issueDate: number;
  content: string;
  field: string;
  employeeId: number;
}
export interface ICertificateRes {
  code: number;
  message: string;
  data: ICertificate[];
}
