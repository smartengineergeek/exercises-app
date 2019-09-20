// business logic
import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from 'material-ui';

const shortid = require('shortid');
const styles = {
    Paper: {padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto'}
}

export default ({ exercises }) => 
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => 
                    <>
                    <Typography
                        variant="headline"
                        style={{textTransform: 'captialize'}}
                        key={shortid.generate()}
                    >
                        {group}
                    </Typography>
                    <List component="ul">
                        {exercises.map(({ title }) => 
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        )}
                    </List>
                    </>
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
               <Typography
                variant="display1"
               >
                    Welcome!
               </Typography>
               <Typography
                variant="subheading"
                style={{marginTop: 20}}
               >
                   Please select an exercise from the list on the left
               </Typography>
            </Paper>
        </Grid>
    </Grid>