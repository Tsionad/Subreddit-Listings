import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const notImage = [ 'self', 'default' ]

const Post = ({ url, title, thumbnail }) => (
    <Card href={url} style={{width: '100%'}}>
        <Card.Content>
            { !notImage.includes(thumbnail) && <Image floated='left' src={thumbnail} rounded bordered size="tiny" />}
            <Card.Header>{title}</Card.Header>
        </Card.Content>
    </Card>
)

export default Post