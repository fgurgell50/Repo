export class NotFoundError extends Error{
    constructor(message: string) {
        super(message)
        this.name = 'NotFoundError'
    }
}

export class BadRequestError extends Error{
    constructor(message: string) {
        super(message)
        this.name = 'BadRequestError'
    }
}

export class BusinessError extends Error{
    constructor(message: string) {
        super(message)
        this.name = 'BusinessError'
    }
}

export class UnautorizedError extends Error{
    constructor(message: string) {
        super(message)
        this.name = 'UnautorizedError'
    }
}

export class UnprocessebleEntityError extends Error{
    constructor(message: string) {
        super(message)
        this.name = 'UnprocessebleEntityError'
    }
}