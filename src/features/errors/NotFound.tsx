import { Link } from "react-router-dom";
import { Header, Icon, Segment, Button } from "semantic-ui-react";

export default function NotFound() {

    return (
        <Segment Placeholder>
        <Header icon>
            <Icon name='search' />
                Opps - we've looked everywhere but could not find what you are looking for!
        </Header>
        <Segment.Inline>
            <Button as={Link} to='/activities'>
                Return to activities page
            </Button>
        </Segment.Inline>
    </Segment>
    )
}