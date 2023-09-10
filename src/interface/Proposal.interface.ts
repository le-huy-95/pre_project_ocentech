export interface IProposal {
    id: number;
    employeeId: number;
    proposalDate: number;
    content: string;
    note: string;
    type: number;
    detailedDescription: string;
    proposalStatus: number;
    acceptanceDate: string;
    additionalRequest: string;
    reasonForRefusal: string;
    rejectionDate: string;
    leaderId: number;
  }
  
  export interface IProposalRes {
    code: number;
    message: string;
    data: IProposal;
  }
  