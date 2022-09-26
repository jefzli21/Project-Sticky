import React, { useState } from 'react'
import './UpcomingTask.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, selectProjectTasks, updateTask } from '../../store/tasks';
import { Button, CardActionArea} from '@mui/material';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';





interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  






const UpcomingTasks = () => {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const tasks = useSelector(selectProjectTasks())

  const count = 0;

  let low = 0; 
  let medium = 0; 
  let high = 0;
  let highPlus = 0;

  tasks.forEach(task => {
    if (task.priority === 1) {
      low += 1;
    } else if (task.priority === 2) {
      medium += 1;
    } else if (task.priority === 3) {
      high += 1;
    } else {
      highPlus +=1;
    }
  })

  function handleTaskCheckboxClick(task) {
    const isChecked = document.getElementById(`checkbox_${task._id}`).checked
    const newTask = { ...task };
    newTask.completed = isChecked;
    dispatch(updateTask(newTask))
}

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={`You currently have ${tasks.length} tasks`}
      />
      <CardContent>
          <Typography variant="body2" color="text.secondary">
            <div className='class-divider'>
            <div className='p-low'>Priority Low: {low} </div>
            <div className='p-medium'>Priority Medium: {medium}</div>
            <div className='p-high'>Priority High: {high}</div>
            <div className='p-highplus'>Priority Very High: {highPlus}</div>
            </div>
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {tasks.map((task, i) => (
            <Card className='task-top' key={i}>
              <CardActionArea>
                  <CardContent>
                      <div className='top-left'>
                          <Typography gutterBottom variant='h5' component='div'>
                              Task: {task.title}
                          </Typography>
                          <Typography className='top-text' variant="body2" color="text.secondary" component="span">
                              Details: {task.description}
                          </Typography>
                          <Typography>{task.comments.map((comment) => comment.body)}</Typography>
                      </div>
                      <div className='top-right'>
                          <div>
                              <input type="checkbox" defaultChecked={task.completed} id={`checkbox_${task._id}`} onChange={() => handleTaskCheckboxClick(task)} />
                          </div>
                          <Button onClick={() => history.push(`/projects/${task.project}/${task._id}`)}>
                              <EditIcon />
                          </Button>
                          <Button onClick={() => dispatch(deleteTask(task._id))}>
                              <DeleteForeverIcon />
                          </Button>
                      </div>
                  </CardContent>
              </CardActionArea>
          </Card>
))}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default UpcomingTasks