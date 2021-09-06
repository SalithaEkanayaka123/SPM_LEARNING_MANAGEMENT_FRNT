const initState = {
    CourseDetails: {
        records: [],
        record: {}
    },
}

export default (courses = [], action) => {
    switch(action.type){
        case 'ADD_COURSE':
            return [...courses, action.payload];
        case 'FETCH_COURSES':
            return action.payload;
        case "UPDATE_COURSE":
            return action.payload;
        case "DELETE_COURSE":
            return courses.filter(item => item.id !== action.payload);
        default:
            return courses;
    }
}
