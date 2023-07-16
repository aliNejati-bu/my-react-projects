export default ({className, children}) => {
    return <div className={'container ' + className}>
        {children}
    </div>
}