const Api =()=>{
    return fetch('http://localhost:3000/server')
	.then(res=>{
		return res.json()
	})
	
	
}
export default Api
