const ContentWrapper = (props)=>{
    return (
        <div className="px-2 w-full mx-auto max-w-[1200px]">
            {props.children}
        </div>
    )
}

export default ContentWrapper;