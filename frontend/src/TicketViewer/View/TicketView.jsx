import { useEffect } from "react";
import getUser from "../api";

const TicketView = ({props}) => {
    // const [content, setContent] = useState(20);

    useEffect(() => {
        getUser();
    });

    return (
        <div>
            ticket view <br/>

        </div>
    )
};

export default TicketView;