export interface JwtPayload
{
  exp : number,
  iat : number,
  nbf : number,
  userId: string,
  login : string,
  nomeUsuario: string,
  token : string


}
