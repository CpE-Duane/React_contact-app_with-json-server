import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let successMsg = (msg: any) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

}
let errorMsg = (msg: any) => {
    toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

const Toast = {
    successMsg,
    errorMsg
}

export default Toast