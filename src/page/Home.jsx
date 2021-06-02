import React from 'react';
import { Grid, Box, Avatar, Typography, Button, Divider } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const Home = () => {
	const theme = useTheme();
	const below_960 = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Grid container sx={{ flexDirection: 'row', justifyContent: 'center' }}>
			{/*Hero section */}
			<Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', position: 'relative' }} component='section'>
				<Box
					sx={{
						px: { md: '40px', sm: '0px', xs: '20px' },
						flex: '1',
						display: 'flex',
						flexDirection: 'column',
						alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },

						pt: { xs: '130px', sm: '0px', md: '0px' }
					}}>
					{/*meta container */}
					<Box
						sx={{
							width: { md: '680px', sm: 'auto', xs: 'auto' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },

							textAlign: { xs: 'center' },
							mt: { md: '5%', sm: '40%', xs: '80px' },
							ml: { md: '0px', sm: '0px', xs: '0px' },
							mr: { md: '20%', sm: '0px', xs: '0px' }
						}}>
						<Avatar alt='logo' src='./images/disney logo.svg' sx={{ width: 160, height: 87, mb: '20px' }} />
						<Typography
							variant='h4'
							sx={{
								color: '#f9f9f9',
								fontFamily: 'Avenir Roman,sans-serif',
								fontSize: '28px',
								fontWeight: 'bold',
								lineHeight: 1.2,
								mb: '30px'
							}}>
							Stream all your favourites and more.
						</Typography>
						{/*plan container */}
						<Box
							sx={{
								alignSelf: 'stretch',
								mb: '20px',
								display: 'flex',
								flexDirection: { md: 'row', sm: 'column', xs: 'column' },
								alignItems: 'center',
								width: { md: '660px', sm: 'auto', xs: 'auto' }
							}}>
							{/*Monthly plan */}
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
									flex: 0.5,
									height: '100%',
									mb: { md: '0px', sm: '12px', xs: '12px' }
								}}>
								<Typography
									sx={{
										display: 'inline-block',
										color: '#f9f9f9',
										fontFamily: 'Avenir Roman,sans-serif',
										fontSize: '26px',
										fontWeight: 'bold',
										lineHeight: 1.2,
										mb: { md: '0px', sm: '8px', xs: '8px' }
									}}>
									S$11.98{' '}
									<Typography sx={{ display: 'inline-block', fontWeight: 400, opacity: 0.7 }}>| Month</Typography>{' '}
								</Typography>
								<Button
									sx={{
										width: { md: '100%', sm: '320px', xs: '320px' },
										bgcolor: '#0063e5',
										color: '#f9f9f9',
										py: '14px',
										px: '12px',
										maxWidth: '320px',

										'& .MuiButton-label': {
											fontFamily: 'Avenir Roman,sans-serif',
											fontSize: '16px',
											letterSpacing: '0.8px',
											fontWeight: 'bold'
										},
										'&:hover,&:active': {
											bgcolor: '#0483ee'
										}
									}}>
									sign up now
								</Button>
							</Box>
							{below_960 ? <Divider sx={{ width: '320px', height: '1px', bgcolor: '#e3e3e3', mb: '12px' }} /> : null}
							{/*anual plan */}
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
									flex: 0.5,
									height: '100%'
								}}>
								<Typography
									sx={{
										display: 'inline-block',
										color: '#f9f9f9',
										fontFamily: 'Avenir Roman,sans-serif',
										fontSize: '26px',
										fontWeight: 'bold',
										lineHeight: 1.2,
										mb: '8px'
									}}>
									S$119.98{' '}
									<Typography sx={{ display: 'inline-block', fontWeight: 400, opacity: 0.7 }}>| Year</Typography>{' '}
								</Typography>
								<Typography sx={{ mb: '24px', fontWeight: 400, opacity: 0.7, color: '#f9f9f9' }}>
									Save over 15%*
								</Typography>
								<Button
									sx={{
										width: { md: '100%', sm: '320px', xs: '320px' },
										bgcolor: '#0063e5',
										color: '#f9f9f9',
										py: '14px',
										px: '12px',
										maxWidth: '320px',
										'& .MuiButton-label': {
											fontFamily: 'Avenir Roman,sans-serif',
											fontSize: '16px',
											letterSpacing: '0.8px',
											fontWeight: 'bold'
										},
										'&:hover,&:active': {
											bgcolor: '#0483ee'
										}
									}}>
									Save on 12 months
								</Button>
							</Box>
						</Box>
						{/*hint text */}
						<Box>
							<Typography sx={{ display: 'inline', color: 'hsla(0,0%,75.3%,.8)', fontSize: '10px' }}>
								Stream Disney's Cruella with Premier Access for an additional fee.{' '}
								<Typography sx={{ display: 'inline', fontSize: '10px' }}>
									Subscription required for both monthly and yearly plans. *Savings compared to 12 months of the monthly
									subscription price.
								</Typography>
							</Typography>
						</Box>
						<Box sx={{ mt: '20px' }}>
							<Avatar
								variant='square'
								alt='brand6in1'
								src='./images/6Brand-1.png'
								sx={{ width: { md: 550, sm: 550, xs: '300px' }, height: 25 }}
							/>
						</Box>
					</Box>
				</Box>
				{/*background image large */}
				{below_960 ? (
					<Box
						sx={{
							opacity: 1,
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 0,
							left: 0,
							height: '100%',
							zIndex: -1
						}}>
						<Box
							sx={{
								backgroundImage: `url('https://cannonball-cdn.bamgrid.com/assets/originals/Hero_Mobile_Cruella_Payoff_V2_en-US_(1).jpg')`,
								height: '100%',
								backgroundPosition: 'top',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								overflow: 'hidden'
							}}></Box>
					</Box>
				) : (
					<Box
						sx={{
							opacity: 1,
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 0,
							left: 0,

							height: '200%',
							zIndex: -1
						}}>
						<Box
							sx={{
								backgroundImage: `url('https://cannonball-cdn.bamgrid.com/assets/originals/Hero_Desktop_Cruella_Payoff_V2_en-US_(1).jpg')`,
								height: '100%',
								backgroundPosition: 'top',
								backgroundSize: '100%',
								backgroundRepeat: 'no-repeat',
								overflow: 'hidden'
							}}></Box>
					</Box>
				)}
			</Grid>
		</Grid>
	);
};

export default Home;
