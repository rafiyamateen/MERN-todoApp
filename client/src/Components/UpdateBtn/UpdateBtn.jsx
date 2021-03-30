import './UpdateBtn.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { CheckCircleFill } from 'react-bootstrap-icons';

const UpdateBtn = ({ input, update }) => {
    return <OverlayTrigger placement='bottom'
        overlay={<Tooltip id='tooltip-bottom'>update</Tooltip>} >
        <CheckCircleFill className='updateBtn icons' onClick={() => { update(input) }} />
    </OverlayTrigger>
}
export default UpdateBtn;