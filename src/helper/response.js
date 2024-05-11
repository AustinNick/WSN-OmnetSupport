const SuccessWebResponse = (code, status, msg, data) => {
    return {
        code: code,
        status: status,
        msg: msg,
        data: data
    }
}

const ErrorWebResponse = (code, msg) => {
    return {
        code: code,
        msg: msg
    }
}

export {
    SuccessWebResponse,
    ErrorWebResponse
}