import './AddButton.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { PlusCircleFill } from 'react-bootstrap-icons';
const AddButton = ({ addItem }) => {
    return <OverlayTrigger placement='bottom'
        overlay={
            <Tooltip id='tooltip-bottom'>add</Tooltip>
        } >

        <PlusCircleFill className='icons addIcon' onClick={addItem} ></PlusCircleFill>
    </OverlayTrigger>
}
export default AddButton;