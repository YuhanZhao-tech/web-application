import _ from "lodash";

export default function auth(userList, loginUser) {
    var userAuth = {
        permit: false
    }
    for (var user of userList) {
        if (_.isEqual(user, loginUser)) {
            console.log("Correct");
            userAuth.permit = true;
        }
    }
    return userAuth.permit;
}
