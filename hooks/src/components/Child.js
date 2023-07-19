import { ChannelContext, UserContext } from "../App"

const Child = () => {
    return (
        <UserContext.Consumer>
            {user => {
                return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return (
                                <h1>Child Component - {user} and Channel - {channel}</h1>
                            )
                        }}
                    </ChannelContext.Consumer>
                )
            }}
        </UserContext.Consumer>
    )
}
export default Child