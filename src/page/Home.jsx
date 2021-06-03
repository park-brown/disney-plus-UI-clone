import React from 'react';
import { Grid, Box, Avatar, Typography, Button, Divider } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const stream_gallery = [
	{ label: 'WandaVison', url: './images/WandaVIsion_MLP_en-SG.jpg' },
	{ label: 'Mandalorian', url: './images/The_Mandalorian_EMEA_UKI.png' },
	{ label: 'Hamilton', url: './images/Hamilton_MLP_en-SG.jpg' },
	{ label: 'EndGame', url: './images/AvengersEndgame_MLP_en-SG.jpg' },
	{ label: 'BlackPanther', url: './images/BlackPanther_MLP_en-SG.jpg' },
	{ label: 'TheRiseOfSkyWalker', url: './images/StarWars_RiseOfTheSkywalker_MLP_en-SG.jpg' },
	{ label: 'Soul', url: './images/Soul_EN.jpg' },
	{ label: 'Mulan', url: './images/Mulan2020_MLP_en-SG.jpg' },
	{ label: 'Forzen2', url: './images/Frozen2_MLP_en-SG.jpg' }
];

const second_gallery = [
	{ label: 'DeadPool2', url: './images/film_pic/Deadpool2_MLP_en-SG.jpg' },
	{ label: 'Kingsman', url: './images/film_pic/Kingsman_TheGoldenCircle_MLP_en-SG.jpg' },
	{ label: 'WarForPlantApes', url: './images/film_pic/WarOfThePlanetOfApes_MLP_en-SG.jpg' },
	{ label: 'GreysAnatomy', url: './images/film_pic/GreysAnatomy_MLP_en-SG.jpg' },
	{ label: 'BigSky', url: './images/film_pic/BigSky_MLP_en-SG.jpg' },
	{ label: 'HowImetYourMother', url: './images/film_pic/HowIMetYourMother_MLP_en-SG.jpg' },
	{ label: 'MazeRunner', url: './images/film_pic/MazeRunner_TheDeathCure_MLP_en-SG.jpg' },
	{ label: '24', url: './images/film_pic/24_MLP_en-SG.jpg' },
	{ label: 'TheSimpsons', url: './images/film_pic/UKI_The_Simpsons_Tile.png' }
];
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
							height: { md: '90vh' },
							justifyContent: { md: 'space-around' },
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

							height: '100%',
							zIndex: -1
						}}>
						<Box
							sx={{
								backgroundImage: `url('https://cannonball-cdn.bamgrid.com/assets/originals/Hero_Desktop_Cruella_Payoff_V2_en-US_(1).jpg')`,
								height: '100%',
								backgroundPosition: 'top',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								overflow: 'hidden'
							}}></Box>
					</Box>
				)}
			</Grid>
			<Grid
				item
				container
				md={12}
				sm={12}
				xs={12}
				sx={{
					display: 'flex',
					height: '100%',

					flexDirection: { md: 'row', sm: 'row', xs: 'row' },

					alignItems: { md: 'center', sm: 'center', xs: 'center' },
					backgroundColor: '#040714',
					maxWidth: '1440px',
					my: { md: 'auto' },
					p: { md: '40px', xs: '20px' }
				}}>
				<Grid
					item
					md={6}
					sm={12}
					xs={12}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						order: { xs: 2, md: 1 },
						p: { md: 0, sm: '40px', xs: '20px' }
					}}>
					<Box
						sx={{
							backgroundImage: 'url(./images/SideAlign_Desktop_Cruella_en-US-1.png)',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: { md: 0, sm: 0, xs: 0 },
							width: '100%',
							paddingTop: { md: '75%', sm: '75%', xs: '56.25%' }
						}}></Box>
				</Grid>
				<Grid
					item
					md={6}
					sm={12}
					xs={12}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						order: { xs: 1, md: 2 },
						alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
						justifyContent: 'center',
						width: { sm: '75%', xs: '100%' },
						height: { md: '100%', sm: '50%', xs: 'auto' },
						py: { md: '50px' },
						pl: { md: '50px' },
						px: { xs: '20px' },
						color: '#f9f9f9'
					}}>
					<Typography variant='h4' sx={{ fontFamily: 'Avenir Roman,sans-serif', mb: '30px' }}>
						Stream Disney's Cruella for S$38.98 with a Disney+ subscription
					</Typography>
					<Box sx={{ mb: '24px' }}>
						<Typography sx={{ color: 'hsla(0,0%,75.3%,.8)', fontSize: { md: '24px' }, lineHeight: 1.5 }}>
							See Disney's Cruella before it's available to all Disney+ subscribers on 27 August. Watch as many times as
							you like with Premier Access for S$38.98 and your Disney+ subscription.{' '}
							<Typography
								sx={{ display: 'inline', color: '#f9f9f9', textDecoration: 'underline', fontSize: { md: '24px' } }}>
								{' '}
								learn more
							</Typography>
						</Typography>
					</Box>
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
				</Grid>
			</Grid>
			<Grid
				item
				container
				md={12}
				sm={12}
				xs={12}
				sx={{
					display: 'flex',
					height: '100%',

					flexDirection: { md: 'row', sm: 'row', xs: 'row' },

					alignItems: { md: 'center', sm: 'center', xs: 'center' },
					backgroundColor: '#040714',
					maxWidth: '1440px',
					my: { md: 'auto' },
					p: { md: '40px', xs: '20px' }
				}}>
				<Grid
					item
					md={6}
					sm={12}
					xs={12}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						order: { xs: 2, md: 2 },
						p: { md: 0, sm: '40px', xs: '20px' }
					}}>
					<Box
						sx={{
							backgroundImage: 'url(./images/Wandavision_4DEVICE_Module_Desktop_v2-6.png)',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: { md: 0, sm: 0, xs: 0 },
							width: '100%',
							paddingTop: { md: '75%', sm: '75%', xs: '56.25%' }
						}}></Box>
				</Grid>
				<Grid
					item
					md={6}
					sm={12}
					xs={12}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						order: { xs: 1, md: 1 },
						alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
						justifyContent: 'center',
						width: { sm: '75%', xs: '100%' },
						height: { md: '100%', sm: '50%', xs: 'auto' },
						py: { md: '50px' },
						pl: { md: '50px' },
						px: { xs: '20px' },
						color: '#f9f9f9'
					}}>
					<Typography variant='h4' sx={{ fontFamily: 'Avenir Roman,sans-serif', mb: '30px' }}>
						Watch the way you want.
					</Typography>
					<Box sx={{ mb: '24px' }}>
						<Typography sx={{ color: 'hsla(0,0%,75.3%,.8)', fontSize: { md: '24px' }, lineHeight: 1.5, mb: '20px' }}>
							Enjoy the big screen experience on your TV, with an ever-growing selection of titles in stunning 4K*.
							Download any show on your mobile or tablet to watch on the go. Plus, you can stream on four screens at
							once and have up to 7 profiles for a personalised viewing experience, so everyone will be happy. Enjoy all
							of these features and more at no extra cost.
						</Typography>
						<Typography variant='h6'>*Compatible equipment required.</Typography>
					</Box>
				</Grid>
			</Grid>
			{/* Stream Disney+ Originals and blockbuster films. */}
			<Grid item container sx={{ backgroundColor: '#040714', justifyContent: 'center', alignItems: 'flex-start' }}>
				<Grid item sx={{ textAlign: 'center', mt: '60px' }}>
					<Typography variant='h4' sx={{ fontFamily: 'Avenir Roman,sans-serif', color: '#f9f9f9', mb: '30px' }}>
						Stream Disney+ Originals and blockbuster films.
					</Typography>
					<Typography
						variant='h6'
						sx={{ color: 'hsla(0,0%,75.3%,.8)', fontSize: { md: '24px' }, lineHeight: 1.5, mb: '20px' }}>
						Discover exclusive Disney+ Originals you can’t find anywhere else and enjoy the biggest hit movies from
						Disney, Pixar, Marvel, Star Wars and more.
					</Typography>
				</Grid>
				{/*Image gallery */}
				<Grid item container xs={12} sx={{ px: '40px', py: '60px' }} spacing={4}>
					{/* <Grid item md={4} sm={6} xs={12}>
						<Box
							sx={{
								height: 0,
								paddingTop: '56.75%',
								backgroundImage: 'url(./images/WandaVIsion_MLP_en-SG.jpg)',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat'
							}}></Box>
					</Grid> */}
					{stream_gallery.map((item) => (
						<Grid key={item.label} item md={4} sm={6} xs={12}>
							<Box
								sx={{
									height: 0,
									paddingTop: '56.75%',
									backgroundImage: `url(${item.url})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat'
								}}></Box>
						</Grid>
					))}
				</Grid>
			</Grid>
			{/*star brings you entertainment for every mood */}
			<Grid item container sx={{ backgroundColor: '#040714', justifyContent: 'center', alignItems: 'flex-start' }}>
				<Grid item sx={{ textAlign: 'center', mt: '60px' }}>
					<Typography variant='h4' sx={{ fontFamily: 'Avenir Roman,sans-serif', color: '#f9f9f9', mb: '30px' }}>
						Star brings you entertainment for every mood.
					</Typography>
					<Typography
						variant='h6'
						sx={{ color: 'hsla(0,0%,75.3%,.8)', fontSize: { md: '24px' }, lineHeight: 1.5, mb: '20px' }}>
						With thousands of hours of entertainment, from favourites to brand-new originals and exclusives, Star has
						something for every moment and every mood.
					</Typography>
				</Grid>
				{/*Image gallery */}
				<Grid item container xs={12} sx={{ px: '40px', py: '60px' }} spacing={4}>
					{second_gallery.map((item) => (
						<Grid key={item.label} item md={4} sm={6} xs={12}>
							<Box
								sx={{
									height: 0,
									paddingTop: '56.75%',
									backgroundImage: `url(${item.url})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat'
								}}></Box>
						</Grid>
					))}
				</Grid>
				{/*Available devices */}
				<Grid
					item
					container
					xs={12}
					sx={{ px: '40px', py: '60px', justifyContent: 'center', alignItems: 'flex-start' }}>
					<Grid item xs={12}>
						<Typography
							variant='h4'
							sx={{ fontFamily: 'Avenir Roman,sans-serif', color: '#f9f9f9', mb: '30px', textAlign: 'center' }}>
							Available on your favourite devices
						</Typography>
					</Grid>
					<Grid item container xs={12} spacing={4} sx={{ height: '100%' }}>
						<Grid item md={3} sm={6} xs={12} sx={{ flexDirection: 'column', alignItems: 'center' }}>
							<Box
								sx={{
									height: 0,
									paddingBottom: '50%',
									backgroundImage: 'url(./images/device-group-tv.png)',
									backgroundPosition: 'center',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat'
								}}></Box>

							<Typography
								variant='h6'
								sx={{ fontFamily: 'Avenir Roman,sans-serif', color: '#f9f9f9', mb: '10px', textAlign: 'center' }}>
								TV
							</Typography>
							<Box>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Amazon Fire TV
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Android TV
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									AppleTV
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Chromecast
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									LG TVs
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Samsung
								</Typography>
							</Box>
						</Grid>
						<Grid item md={3} sm={6} xs={12} sx={{ flexDirection: 'column', alignItems: 'center' }}>
							<Box
								sx={{
									height: 0,
									paddingBottom: '50%',
									backgroundImage: 'url(./images/device-group-computer.png)',
									backgroundPosition: 'center',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat'
								}}></Box>

							<Typography
								variant='h6'
								sx={{ fontFamily: 'Avenir Roman,sans-serif', color: '#f9f9f9', mb: '10px', textAlign: 'center' }}>
								Computer
							</Typography>
							<Box>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Chrome OS
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									MacOS
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Windows PC
								</Typography>
							</Box>
						</Grid>
						<Grid item md={3} sm={6} xs={12} sx={{ flexDirection: 'column', alignItems: 'center' }}>
							<Box
								sx={{
									height: 0,
									paddingBottom: '50%',
									backgroundImage: 'url(./images/device-group-mobile-tablet.png)',
									backgroundPosition: 'center',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat'
								}}></Box>

							<Typography
								variant='h6'
								sx={{ fontFamily: 'Avenir Roman,sans-serif', color: '#f9f9f9', mb: '10px', textAlign: 'center' }}>
								Mobile & Tablet
							</Typography>
							<Box>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Amazon Fire Tablets
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Android Phones & Tablets
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									iPhone & iPad
								</Typography>
							</Box>
						</Grid>
						<Grid item md={3} sm={6} xs={12} sx={{ flexDirection: 'column', alignItems: 'center' }}>
							<Box
								sx={{
									height: 0,
									paddingBottom: '50%',
									backgroundImage: 'url(./images/device-group-game-consoles.png)',
									backgroundPosition: 'center',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat'
								}}></Box>

							<Typography
								variant='h6'
								sx={{ fontFamily: 'Avenir Roman,sans-serif', color: '#f9f9f9', mb: '10px', textAlign: 'center' }}>
								Game Console
							</Typography>
							<Box>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									PS4
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									PS5
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Xbox One
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Xbox Series X
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Avenir Roman,sans-serif',
										color: 'hsla(0,0%,75.3%,.8)',
										mb: '6px',
										textAlign: 'center'
									}}>
									Xbox Series S
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/*Footer */}
			<Grid item container xs={12} spacing={2} sx={{ bgcolor: '#040714', justifyContent: 'center' }} component='footer'>
				<Grid item xs={12} sx={{ height: 'fit-content' }}>
					<Avatar
						variant='square'
						alt='logo'
						src='./images/disney logo.svg'
						sx={{ width: 80, height: 40, mx: 'auto' }}
					/>
				</Grid>
				<Grid
					item
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						height: 'fit-content',
						flexWrap: 'wrap'
					}}
					md={8}
					sm={10}
					xs={12}>
					<Typography
						variant='caption'
						sx={{ fontFamily: 'Avenir Roman,sans-serif', color: 'hsla(0,0%,75.3%,.8)', textAlign: 'center' }}>
						Subscriber Agreement
					</Typography>
					<Typography
						variant='caption'
						sx={{ fontFamily: 'Avenir Roman,sans-serif', color: 'hsla(0,0%,75.3%,.8)', textAlign: 'center' }}>
						Privacy policy
					</Typography>
					<Typography
						variant='caption'
						sx={{ fontFamily: 'Avenir Roman,sans-serif', color: 'hsla(0,0%,75.3%,.8)', textAlign: 'center' }}>
						Supplemental Privacy Policy
					</Typography>
					<Typography
						variant='caption'
						sx={{ fontFamily: 'Avenir Roman,sans-serif', color: 'hsla(0,0%,75.3%,.8)', textAlign: 'center' }}>
						Interest-Based Ads
					</Typography>

					<Typography
						variant='caption'
						sx={{ fontFamily: 'Avenir Roman,sans-serif', color: 'hsla(0,0%,75.3%,.8)', textAlign: 'center' }}>
						Supported Devices
					</Typography>
					<Typography
						variant='caption'
						sx={{ fontFamily: 'Avenir Roman,sans-serif', color: 'hsla(0,0%,75.3%,.8)', textAlign: 'center' }}>
						Help
					</Typography>
					<Typography
						variant='caption'
						sx={{ fontFamily: 'Avenir Roman,sans-serif', color: 'hsla(0,0%,75.3%,.8)', textAlign: 'center' }}>
						About us
					</Typography>
				</Grid>
				<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
					<Typography
						variant='caption'
						sx={{
							fontFamily: 'Avenir Roman,sans-serif',
							color: 'hsla(0,0%,75.3%,.8)',
							textAlign: 'center'
						}}>
						© 2021 Disney and its related entities. All Rights Reserved.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
