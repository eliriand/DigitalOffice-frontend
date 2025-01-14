/* tslint:disable */
/* eslint-disable */
import { OperationResultStatusType } from './operation-result-status-type';

/**
 * Response object for action operations.
 */
export interface OperationResultResponse {
  body?: {  };
  errors?: Array<string>;
  status?: OperationResultStatusType;
}

