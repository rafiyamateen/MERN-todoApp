const EditForm = ({ input, onChange }) => {
    return <input className='input' id='editForm' value={input.todo} onChange={onChange} />
}
export default EditForm;