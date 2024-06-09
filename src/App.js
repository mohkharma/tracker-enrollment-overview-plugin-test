import React from 'react'
import Plugin from "./Plugin";
import { Button } from '@dhis2/ui'


const query = {
    me: {
        resource: 'me',
    },
}

let logger1 = () => window.alert('It works!');
const MyApp = () => (
    <div>
            <Button
                name="Primary button"
                onClick={logger1}
                primary
                large
                value="default"
            >
                Click me!
            </Button>

        <Plugin
            pluginSource={'http://localhost:3002/plugin.html'}
        />
    </div>
)

export default MyApp
