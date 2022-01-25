export interface Todo{
    sno : number,
    task : string,
    status : Status
}

enum Status {
    active = 1,
    pending = 2,
    done = 3,
    cancelled = 4
  }