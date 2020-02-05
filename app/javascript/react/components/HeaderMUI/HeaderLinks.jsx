/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AttachMoney from '@material-ui/icons/AttachMoney'
import ViewList from '@material-ui/icons/ViewList'
import Camera from '@material-ui/icons/Camera'
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "@material-ui/core/Button";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className='fsadasdasd'>
    <ListItem className='asfasdasd'>
      <Link
        to="/pricing"
        color="transparent"
        className='asfasfasf'
      >
        <AttachMoney className='asfasfasf' /> Pricing
      </Link>
    </ListItem>
      <ListItem className='asfasfasfasf'>
        <Link
          to="/services"
          color="transparent"
          className='sdfasdafasf'
        >
          <ViewList className='asfasfasf' /> Services
        </Link>
      </ListItem>
      <ListItem className='asfasfasf'>
        <Link
          to="/gallery"
          color="transparent"
          className='sdfsadadasd'
        >
          <Camera className='sdfsadfadad' /> Our Work
        </Link>
      </ListItem>
      <ListItem className='sfdadasfasf'>
        <Link
          to="/home"
          color="transparent"
          className='sfasfasdafd'
        >
          <AccountCircle className='sadafasfaf' /> Client Log-in
        </Link>
      </ListItem>
      <ListItem className='sdfasdasf'>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}

        >
          <Button
            href="https://twitter.com"
            target="_blank"
            color="transparent"
            className='sdfasdafafasf'
          >
            <i className={'safasfaa' + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className='sdfasfdada'>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}

        >
          <Button
            color="transparent"
            href="https://www.facebook.com"
            target="_blank"
            className='safasfasfasfas'
          >
            <i className={'sfafasf' + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className='sdfsafafaf'>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}

        >
          <Button
            color="transparent"
            href="https://www.instagram.com"
            target="_blank"
            className='sdfasfasfasf'
          >
            <i className={'sdfasdasdasd' + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default HeaderLinks;
