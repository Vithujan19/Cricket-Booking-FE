import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRouterBuyer = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user) {
                    if (user.role === 'buyer' && token) {
                        return <Component {...props} />;
                    }
                    else {
                        return (
                            <Redirect
                                to={{
                                    pathname: '/',
                                    state: {
                                        from: props.location,
                                    },
                                }}
                            />
                        );
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

const ProtectedRouterSeller = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user) {
                    if (user.role === 'seller' && token) {
                        return <Component {...props} />;
                    }
                    else {
                        return (
                            <Redirect
                                to={{
                                    pathname: '/',
                                    state: {
                                        from: props.location,
                                    },
                                }}
                            />
                        );
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

const ProtectedRouterAdmin = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user) {
                    if (user.role === 'admin' && token) {
                        return <Component {...props} />;
                    }
                    else {
                        return (
                            <Redirect
                                to={{
                                    pathname: '/',
                                    state: {
                                        from: props.location,
                                    },
                                }}
                            />
                        );
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

const ProtectedRouter = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user) {
                    if (token) {
                        return <Component {...props} />;
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

const ProtectedRouterBuyerSeller = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user) {
                    if ((user.role === 'buyer' || user.role === 'seller') && token) {
                        return <Component {...props} />;
                    }
                    else {
                        return (
                            <Redirect
                                to={{
                                    pathname: '/',
                                    state: {
                                        from: props.location,
                                    },
                                }}
                            />
                        );
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export {
    ProtectedRouterBuyer,
    ProtectedRouterSeller,
    ProtectedRouterAdmin,
    ProtectedRouter,
    ProtectedRouterBuyerSeller,
};