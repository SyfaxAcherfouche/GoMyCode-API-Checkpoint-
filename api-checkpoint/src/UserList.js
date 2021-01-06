const DataDisplay = ({name, email, username}) => {
	return (

		<div className="listOfUSer" >
            <h1 id='name'>{name}</h1>
            <h1 id='username'>{username}</h1>
            <br></br>
            <br></br>
            <h1 id='email'>{email}</h1>
		</div>

		)

}


export default DataDisplay