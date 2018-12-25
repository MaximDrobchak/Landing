import styled from 'styled-components';

export const ServicesItemStyle = styled.div`
	background-color: #3d577c;
	padding-top: 10px;

	& :nth-child(3) {
		font-family: Roboto;
		margin-bottom: 0 auto;
		font-size: 1em;
		font-weight: 900;
		letter-spacing: 0.3px;
		text-align: left;
		color: #ffffff;
		@media (max-width: 1095px) {
			font-size: 0.8em;
			margin-bottom: 0%;
		}
	}

	& :nth-child(4) {
		font-family: Roboto;
		font-size: 1em;
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 0.3px;
		text-align: left;
		color: #ffffff;
		margin: 0;
		padding-left: 0 0 0 1em;

		@media (max-width: 1095px) {
			font-size: 0.8em;
		}
	}

	@media (max-width: 1095px) {
		padding-right: 10%;
	}
`;

export const Icon = styled.img`
	height: 56px;
	margin-bottom: 10px;

	@media (max-width: 1095px) {
		height: 49px;
	}
`;
