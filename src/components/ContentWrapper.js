const ContentWrapper = (props)=>{
    return (
        <div className="px-2  mx-auto max-w-[1200px]">
            {props.children}
        </div>
    )
}

export default ContentWrapper;