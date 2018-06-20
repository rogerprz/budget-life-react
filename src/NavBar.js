import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Menu, Icon, Segment, Dropdown } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
class NavBar extends Component{
     constructor(){
        super();

        this.state={
            activeItem: "home"
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
    const { activeItem } = this.state

    return (
      <Menu>
          <NavLink to="/home">
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              <Icon name="home"/>Home
            </Menu.Item>
        </NavLink>
        <NavLink to="/transactions">
        <Menu.Item name='transactions' active={activeItem === 'transactions'} onClick={this.handleItemClick}>
          <Icon name="dollar sign"/>Transactions
        </Menu.Item>
        </NavLink>
        <NavLink to="/event_plannings">
        <Menu.Item
          name='eventPlanning'
          active={activeItem === 'eventPlanning'}
          onClick={this.handleItemClick}>
          <Icon name="calendar alternate"/>Event Planning
        </Menu.Item>
        </NavLink>
        <NavLink to="/bills">
        <Menu.Item
          name='bills'
          active={activeItem === 'bills'}
          onClick={this.handleItemClick}>
          <Icon name="payment"/>Bills
        </Menu.Item>
        </NavLink>
        <Menu.Menu position='right'>
            <Dropdown  item icon="setting" simple>
                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Icon name="log out" color="red" value="logout"/>Logout
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Icon name="user" color="blue" value="user"/>Profile
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;