
// Exercise: create a "withUserApi" HOC which provides a "fetchUsers" async function to the WrappedComponent.
const withUserApi = () => {
  return null
}


// Exercise: write a component which calls the async "fetchUsers" function provided through props on mount and renders a list of elements returned from this function.
/**
 * @param {{fetchUsers: function(void): Promise<{id:string, first_name:string, last_name:string}[]>}} fetchUsers - Fetches an array of User objects.
 */
const Users = ({fetchUsers}) => {
  return null
}



const UsersWithApi = withUserApi(Users)