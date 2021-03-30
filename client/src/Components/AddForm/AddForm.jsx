const AddForm = ({ onChange, input }) => {
    return <input className='input' id='addForm' type='text' value={input.todo} onChange={onChange} placeholder='Add an item' />
}
export default AddForm;