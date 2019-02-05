import React, { Component, Fragment } from 'react';
import i18n from '../../i18n';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

const styles = {
  button: {
    padding: '8px',
    minWidth: '40px'
  },
  lang: {
    fontFamily: 'Poppins-Bold',
    marginRight: 10,
    fontSize: '12px'
  },
  popper: {
    zIndex: 1000
  },
  menuList: {
    padding: 0
  },
  menuItem: {
    fontSize: '12px',
    fontFamily: 'Poppins-Bold'
  }
};

class ChangeLanguageButton extends Component {
  state = {
    open: false
  };

  handleChangeLanguage = async lng => {
    await i18n.changeLanguage(lng);
    this.handleClose(false);
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const currentLng = window.localStorage.i18nextLng === 'fr-FR' ? 'FR' : 'EN';
    return (
      <Fragment>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={this.handleToggle}
          style={styles.button}
        >
          <span style={styles.lang}>{currentLng}</span>
        </Button>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          style={styles.popper}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id='menu-list-grow'
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList style={styles.menuList}>
                    {currentLng === 'EN' && (
                      <MenuItem
                        style={styles.menuItem}
                        onClick={() => this.handleChangeLanguage('fr-FR')}
                      >
                        FR
                      </MenuItem>
                    )}
                    {currentLng === 'FR' && (
                      <MenuItem
                        onClick={() => this.handleChangeLanguage('en')}
                        style={styles.menuItem}
                      >
                        EN
                      </MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    );
  }
}

export default ChangeLanguageButton;
