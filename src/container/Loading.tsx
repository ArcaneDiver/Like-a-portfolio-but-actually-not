import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoadingGrid = styled(motion.ul)`
	min-height: 15em;
	min-width: 15em;

	list-style: none;

	background: rgba(255, 255, 255, 0.2);

	display: grid;
	gap: 1em;
	padding: 1em;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
`;

const LoadingItem = styled(motion.li)`
	background-color: ${prop => prop.theme.colors.text};
	border-radius: 100%;
`;

type Props = {
	onComplete: () => void;
};

const Loading: FC<Props> = ({ onComplete }) => {
	const grid: Variants = {
		hidden: {
			opacity: 0,
			scale: 0,
			borderRadius: 50,
			padding: '1em',
		},
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 135,
			transition: {
				duration: 0.8,
			},
		},
		exit: {
			scale: [1, 1.2, 0],
			padding: ['1em', '2em', '5em'],
			borderRadius: [50, 100, 100],
			rotate: [135, 135, -635],
			transition: {
				duration: 2,
				times: [0.3, 0.4, 1],
			},
		},
	};

	const pos = [
		{ x: -1, y: -1 },
		{ x: 1, y: -1 },
		{ x: -1, y: 1 },
		{ x: 1, y: 1 },
	];

	const item: Variants = {
		hidden: i => ({
			x: pos[i].x * 20,
			y: pos[i].y * 20,
			opacity: 0,
		}),
		visible: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<LoadingWrapper>
			<LoadingGrid
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={grid}
				whileHover={{
					scale: 1.1,
				}}
				whileTap={{
					scale: 0.8,
					padding: '1.5em',
				}}
				onAnimationComplete={onComplete}
			>
				{Array.from({ length: 4 }).map((_, i) => (
					<LoadingItem custom={i} variants={item} key={i} />
				))}
			</LoadingGrid>
		</LoadingWrapper>
	);
};

export default Loading;
