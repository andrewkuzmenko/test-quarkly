import React from "react";
import theme from "theme";
import { Theme, Text, Box, Button, Hr, Icon, Image, Link } from "@quarkly/widgets";
import { Override, Menu, Section } from "@quarkly/components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section text-align="center" padding="100px 0">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px 0">
				Button
			</Button>
		</Section>
		<Box />
		<Button>
			Button
		</Button>
		<Hr />
		<Icon category="md" icon={MdFace} />
		<Image width="64px" height="64px" />
		<Link href="#">
			Some text
		</Link>
		<Text>
			Some text
		</Text>
	</Theme>;
});