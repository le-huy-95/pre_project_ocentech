export type ICreateSalary = Pick<
    ISalaryIncreate,
    "startDate" | "reason" | "note" | "oldSalary" | "newSalary"
> & {
    leaderId?: string;
};


export interface ISalaryIncreate {
    id: number;
    startDate: number;
    times: number;
    reason: string;
    currentPosition: number;
    note: string;
    oldSalary: number;
    newSalary: number;
    salaryIncreaseStatus: number;
    acceptanceDate: null;
    additionalRequest: string;
    reasonForRefusal: null;
    rejectionDate: null;
    leaderId: number;
    employeeId: number;
}
export interface ISalaryIncreateRes {
    code: number;
    message: string;
    data: ISalaryIncreate[];
}
