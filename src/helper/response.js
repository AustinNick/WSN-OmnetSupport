const SuccessWebResponse = (code, status, msg, data) => {
    return {
        code: code,
        status: status,
        msg: msg,
        data: data
    }
}

const ErrorWebResponse = (code, msg, errors) => {
    return {
        code: code,
        msg: msg,
        errors: errors
    }
}

export {
    SuccessWebResponse,
    ErrorWebResponse
}