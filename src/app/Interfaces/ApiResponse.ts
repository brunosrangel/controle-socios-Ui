import { HttpStatusCode } from '@angular/common/http';

export interface ApiResponse {
  success: boolean;
  data: object;
  errorMessage: string;
  statusCode: HttpStatusCode;
}
