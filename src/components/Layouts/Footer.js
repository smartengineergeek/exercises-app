import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

const shortid = require('shortid');

export default ({muscles, category, onSelect }) => {
    const index = category ? muscles.findIndex(group => group === category) + 1: 0;
    const onIndexSelect = (e, index) => 
        onSelect(index === 0 ? '': muscles[index -1 ])
    return(
    <Paper>
        <Tabs
            value={index}
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="All" />
            {muscles.map(group => 
                <Tab label={group} key={shortid.generate()} />
            )}
        </Tabs>
    </Paper>
    )
}
