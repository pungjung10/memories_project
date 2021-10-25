export default (posts = [],action) => {
    switch (action.type) {
        //fetch data in action
        case 'FETCH_ALL':
          return action.payload;
        case 'CREATE':
          return posts;
        default:
          return posts;
      }
}