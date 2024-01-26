import _ from "lodash";

export default function auth(userList, loginUser) {
    var permit = false;
    for (var user of userList) {
        if (_.isEqual(user, loginUser)) {
            permit = true;
        }
    }
    return permit;
}
