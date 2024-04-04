function apiMiddleware(store) {
    return function (next) {
        return function (action) {
            console.log('this is api middleware');
            return next(action);
        }
    }
}

export default apiMiddleware;