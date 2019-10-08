// business logic
import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from 'material-ui';
import { ListItemSecondaryAction } from 'material-ui';
import { IconButton } from 'material-ui';
import { Edit, Delete } from 'material-ui-icons';

import Form from './Form';

const shortid = require('shortid');
const styles = {
    Paper: {padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto'}
}

export default ({ 
        muscles,
        exercises, 
        category,
        editMode,
        onSelect,
        exercise,
        exercise: { 
            id, 
            title = 'Welcome!',
            description = ' Please select an exercise from the list on the left'
        },
        onDelete,
        onSelectEdit, 
        onEdit
    }) => 
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => 
                    !category || category === group
                    ? <Fragment key={group}>
                    <Typography
                        variant="headline"
                        style={{textTransform: 'capitalize'}}
                        key={shortid.generate()}
                    >
                        {group}
                    </Typography>
                    <List component="ul">
                        {exercises.map(({ id, title }) => {
                            return(                             
                            <ListItem key={id} button onClick={() => onSelect(id)}>
                                <ListItemText primary={title} />
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => onSelectEdit(id)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => onDelete(id)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>)
                        }
                        )}
                    </List>
                    </Fragment>: null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {
                    editMode ? 
                    <Form 
                        exercise={exercise}
                        muscles={muscles} 
                        onSubmit={onEdit}
                    />:
                    <>
                    <Typography  variant="display1">
                        {title}
                    </Typography>
                    <Typography
                        variant="subheading"
                        style={{marginTop: 20}}
                    >
                        {description}
                    </Typography>                    
                    </>
                }
            </Paper>
        </Grid>
    </Grid>

    /*
     exercise: {
            id = "overhead-press", 
            title = 'Welcome!',
            description = ' Please select an exercise from the list on the left'
        }
    */