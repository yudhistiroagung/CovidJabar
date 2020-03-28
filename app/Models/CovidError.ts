export class CovidError extends Error {

  public code: string;
  public data: any;

  constructor(code: string, data: any = {}) {
    super(code);
    this.code = code;
    this.data = data;
  }

}