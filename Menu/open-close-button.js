const OpenCloseButton = ({children, ...props}) => <button {...props}>{children} </button>

const OpenButton = (props) => <span {...props}> Menu Open </span>
const CloseButton = (props) => <span {...props}> X </span>

export default OpenCloseButton
export {OpenButton, CloseButton}
