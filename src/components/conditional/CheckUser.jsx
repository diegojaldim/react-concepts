const CheckUser = props => {
    if (props.test) {
        return props.children;
    } else {
        return false;
    }
}

export default CheckUser;