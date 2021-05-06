interface ICreateUserRequestDTO {
  _id: string,
  name: string,
  loginOption: string,
  password: string,
  birth: string
}

export { ICreateUserRequestDTO }
