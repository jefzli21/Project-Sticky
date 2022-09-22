import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, selectProjects } from '../../store/projects';
import './RightBar.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;







const RightBar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const sessionUser = useSelector(state=> state.session.user);
  const projects = useSelector(selectProjects());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  const showDrawer = () => {
    setOpen(true);
  }

  const OnClose = () => {
    setOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const proj = {
      title,
      description,
      creator: sessionUser._id
    }
    dispatch(createProject(proj))
  }

  return (
   <div className='project-container'>
     <h1>Create a Project</h1>
   </div>
  )
}

export default RightBar
