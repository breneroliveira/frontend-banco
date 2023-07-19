function Form({button}) {
    return(
        <form>
            <input type='text' placeholder='Name' className='form-control' />
            <input type='text' placeholder='Brand' className='form-control' />

            {
                button
                ?
                <input type='button' value='Save' className='btn btn-primary' />
                :
                <div>
                    <input type='button' value='Update' className='btn btn-warning' />
                    <input type='button' value='Delete' className='btn btn-danger' />
                    <input type='button' value='Cancel' className='btn btn-secondary' />
                </div>
            }
        </form>
    )
}

export default Form;