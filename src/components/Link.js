// import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }){
    // const { navigate } = useNavigation();
    
    const handleClick = (event) => {
        // if(event.metaKey || event.ctrlKey){
        //     return;
        // }
        event.preventDefault();
        console.log("user navigating to: ", to)
        // navigate(to);
    };

    return (
        <a onClick={handleClick} href={to} >{children}</a>
    )
}

export default Link;