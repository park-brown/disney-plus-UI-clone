import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Fade from '@material-ui/core/Fade';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

function ShowOnScroll(props) {
	const { children } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: undefined,
		threshold: 100,
		disableHysteresis: true
	});

	return (
		<Fade appear={false} in={trigger} timeout={500} easing='ease-out'>
			{children}
		</Fade>
	);
}

ShowOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func
};

export default function Header(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<ShowOnScroll {...props}>
				<AppBar sx={{ bgcolor: '#090b13' }}>
					<Toolbar sx={{ justifyContent: 'space-between' }}>
						<Avatar
							alt='disney logo'
							src='./images/disney logo.svg'
							sx={{ width: 64, height: 34, cursor: 'pointer' }}
						/>
						<Box sx={{ width: 210, display: 'flex', justifyContent: 'space-between' }}>
							<Button
								sx={{
									bgcolor: '#0063e5',
									opacity: 0.95,
									color: 'white',
									'&:hover,&:active': { opacity: 1, bgcolor: '#0063e5', color: 'white' }
								}}>
								sign up now
							</Button>
							<Button sx={{ color: 'white', border: '1px solid #fff', borderRadius: '4px' }}>login</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</ShowOnScroll>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					bgcolor: 'transparent',
					position: 'fixed',
					top: 0,
					right: 0,
					left: 0
				}}>
				<Button sx={{ color: 'white', border: '1px solid #fff', borderRadius: '4px', marginLeft: 'auto' }}>
					login
				</Button>
			</Toolbar>
		</React.Fragment>
	);
}
