export interface IProccess {
  id: number;
  promotionDay: number;
  times: number;
  currentPosition: number;
  newPosition: number;
  note: string;
  processStatus: string;
  acceptanceDate: null;
  additionalRequest: null;
  reasonForRefusal: null;
  rejectionDate: null;
  leaderId: number;
  employeeId: number;
}

export interface IProccessRes {
  code: number;
  message: string;
  data: IProccess[];
}
