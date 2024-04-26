import propsTypes from 'prop-types';

function Student(props) {
    return (
        <div className="card">
            <p className='name'>Name : {props.name}</p>
            <p >Age : {props.age}</p>
            <p >Student : {props.isStudent ? "Yes": "No"}</p>
        </div>
    )
}


//PropTypes exports a range of validators that can be used to make sure the data you receive is valid
Student.propsTypes = {
    name: propsTypes.string,
    age: propsTypes.number,
    isStudent: propsTypes.bool
}

//Default props:
// The defaultProps is a React component property that allows you to set default values for the props argument. If the prop property is passed, it will be changed. The defaultProps can be defined as a property on the component class itself, to set the default props for the class

Student.defaultProps = {
    name : "Guest",
    age: 0,
    isStudent: false
}

export default Student;