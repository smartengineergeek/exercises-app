import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

const shortid = require('shortid');

export default ({muscles}) => {
    return(
    <Paper>
        <Tabs
            value={0}
            //onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="All" />
            {
                muscles.map(group => <Tab label={group} key={shortid.generate()} />)
            }
        </Tabs>
    </Paper>
    )
}
