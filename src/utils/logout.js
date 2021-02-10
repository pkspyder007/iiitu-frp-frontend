import axios from "axios";
const logout = () => {
    axios.post("/users/logout")
    .then(res => {
        window.location.replace("/")
    })
    .catch(err => {
        alert(err)
    })
}
export default logout;