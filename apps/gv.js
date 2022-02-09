
export const gv = {
    endpoint: "https://everydaysmarter.herokuapp.com/",
    path: window.location.pathname,
    date: new Date().toJSON().split("T")[0],
    time: new Date().toJSON().split("T")[1],
    dn: navigator.userAgentData.platform
};