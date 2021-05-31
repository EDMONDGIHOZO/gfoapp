import React, { useEffect, UseState, useRef } from "react";
import { View, Text, Animated } from "react-native";
import SVG, { G, Circle, Svg } from "react-native-svg";

const Loading = ({
	percentage = 0,
	radius = 40,
	strokeWidth = 10,
	duration = 4000,
	color = "#00ADEF",
	delay = 0,
	textColor,
	max = 100,
}) => {
	const animatedValue = useRef(new Animated.Value(0)).current;
	const halfCircle = radius + strokeWidth;
	const cirleCircumference = 2 * Math.PI * radius;
	const circleRef = React.useRef();
	const AnimatedCircle = Animated.createAnimatedComponent(Circle);

	const animation = (toValue) => {
		return Animated.timing(animatedValue, {
			toValue,
			duration,
			delay,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		animation(percentage);

		animatedValue.addListener((v) => {
			if (circleRef?.current) {
				const maxPercentage = (100 * v.value) / max;
				const strokeDashoffset =
					cirleCircumference - (cirleCircumference * maxPercentage) / 100;
				circleRef.current.setNativeProps({
					strokeDashoffset,
				});
			}
		});
	});

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Svg
				width={radius * 2}
				height={radius * 2}
				viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
			>
				<G rotation="-90" origin={`${halfCircle} , ${halfCircle}`}>
					<Circle
						cy="50%"
						cx="50%"
						stroke={"white"}
						strokeWidth={strokeWidth}
						r={radius}
						strokeOpacity={0.3}
					/>
					<AnimatedCircle
						ref={circleRef}
						cy="50%"
						cx="50%"
						stroke={color}
						strokeWidth={strokeWidth}
						r={radius}
						fill="transparent"
						strokeDasharray={cirleCircumference}
						strokeDashoffset={cirleCircumference}
						strokeLinecap="round"
					/>
				</G>
			</Svg>
		</View>
	);
};

export default Loading;
