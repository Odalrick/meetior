import React from 'react'

export default function Router(props){
	const {router} = props
	return (
		switch (router.path) {
        case '/':
            return <Home/>;
        case '/other':
            return <Other/>
        default:
            return <NotFound/>;
    }
	)
}