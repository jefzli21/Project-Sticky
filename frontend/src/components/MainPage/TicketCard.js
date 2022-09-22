import { Link } from 'react-router-dom';
import './TicketCard.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const TicketCard = () => {
  return (
  <div className='card-container'>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={40} color='green'>
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={25} color='green'>
                <CircularProgressLabel>25%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={33} color='green'>
                <CircularProgressLabel>33%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={22} color='green'>
                <CircularProgressLabel>22%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={5} color='green'>
                <CircularProgressLabel>5%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={95} color='green'>
                <CircularProgressLabel>95%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={45} color='green'>
                <CircularProgressLabel>45%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={80} color='green'>
                <CircularProgressLabel>80%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={40} color='green'>
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>Birthday Party</h4>
          </div>
        </div>
        <p>Getting ready for the party</p>
        <p>Deadline: Oct 10, 2022</p>
        <div className='card-functions'>
          <Button>
              <EditIcon/>
          </Button>
          <Button>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>





  </div>
  )
}

export default TicketCard
